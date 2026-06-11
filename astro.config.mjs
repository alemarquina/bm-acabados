import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://bmacabados.me',
    integrations: [tailwind(), sitemap()],
    image: {
        service: passthroughImageService(),
    },
    devToolbar: {
        enabled: false,
    }
});