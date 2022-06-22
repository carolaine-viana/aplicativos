import { KnownFeatureFlags } from 'shared/types';

type TEnv = 'hom' | 'prod';
export default class FeatureFlag {
  private static instance: FeatureFlag;

  private constructor() {}

  public static getInstance(): FeatureFlag {
    if (!FeatureFlag.instance) {
      FeatureFlag.instance = new FeatureFlag();
    }

    return FeatureFlag.instance;
  }

  getEnv(): TEnv {
    return 'prod';
  }

  getAllFlags() {
    return [
      KnownFeatureFlags.POSITIVACOES,
      KnownFeatureFlags.INCENTIVOS,
      KnownFeatureFlags.SALDO_BEM,
      KnownFeatureFlags.EXTRATO,
      KnownFeatureFlags.INCENTIVOS,
      KnownFeatureFlags.SAC,
      KnownFeatureFlags.POLITICA_PRIVACIDADE,
    ];
  }
}
