import { map } from "nanostores";

export interface LayoutProps {
  description?: string;
  title?: string;
}

export const $layout = map<LayoutProps>({
  description: "Astro Boilerplate - Description",
  title: "Astro Boilerplate - Title",
});
