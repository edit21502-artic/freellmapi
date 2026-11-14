import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PowerTokensProvider } from '../../providers/powertokens.js';
import { initDb, getDb } from '../../db/index.js';
import { getProvider } from '../../providers/index.js';
import { detectPlatform } from '../../lib/key-parser.js';

beforeEach(() => { process.env.ENCRYPTION_KEY = '0'.repeat(64); initDb(':memory:'); });
afterEach(() => { vi.restoreAllMocks(); getDb().close(); });

describe('PowerTokens', () => {
  it('registers and detects env-style keys', () => {
    expect(getProvider('powertokens')).toBeInstanceOf(PowerTokensProvider);
    expect(detectPlatform('POWERTOKENS_')).toBe('powertokens');
  });
  it('posts to the PowerTokens chat endpoint with a bearer key', async () => {
    const fetch = vi.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify({
      id: 't', object: 'chat.completion', created: 1, model: 'deepseek-v4-pro',
      choices: [{ index: 0, message: { role: 'assistant', content: 'Hi' }, finish_reason: 'stop' }],
    }), { status: 200 }));
    const r = await new PowerTokensProvider().chatCompletion('sk-pt-test', [{ role: 'user', content: 'Hello!' }], 'deepseek-v4-pro');
    expect(r.choices[0].message.content).toBe('Hi');
    expect(fetch.mock.calls[0][0]).toBe('https://api.powertokens.ai/v1/chat/completions');
    const init = fetch.mock.calls[0][1] as RequestInit;
    expect(new Headers(init.headers).get('authorization')).toBe('Bearer sk-pt-test');
    expect(JSON.parse(String(init.body)).model).toBe('deepseek-v4-pro');
  });
});
