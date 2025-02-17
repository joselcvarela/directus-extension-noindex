import { defineHook } from "@directus/extensions-sdk";

export default defineHook(({ embed }) => {
  embed("head", '<meta name="robots" content="noindex, nofollow" />');
});
