import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({ stage: 1 }),
    autoprefixer(),
    cssnano({ preset: 'default' }),
  ],
};
