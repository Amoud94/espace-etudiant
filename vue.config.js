import { ProvidePlugin } from "webpack";

export const configureWebpack = {
  plugins: [
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
export const devServer = {
  port: 8080
};
