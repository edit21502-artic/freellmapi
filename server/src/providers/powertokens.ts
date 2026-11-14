import { OpenAICompatProvider } from './openai-compat.js';

export const POWERTOKENS_BASE_URL = 'https://api.powertokens.ai/v1';

/** PowerTokens — OpenAI-compatible gateway (keys look like `sk-pt-...`).
 * Model rows (e.g. `deepseek-v4-pro`) are added via the catalog / Add model. */
export class PowerTokensProvider extends OpenAICompatProvider {
  constructor() {
    super({ platform: 'powertokens', name: 'PowerTokens', baseUrl: POWERTOKENS_BASE_URL, timeoutMs: 120_000 });
  }
}
