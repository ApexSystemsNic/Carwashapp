import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

/**
 * Documento raíz solo para la vista web (preview). `viewport-fit=cover` + `100dvh` evitan que la barra de
 * Safari en iPhone tape la barra de pestañas (el reset de Expo usa 100% fijo, que no se ajusta cuando
 * Safari muestra/oculta su propia barra). No afecta la app nativa (iOS/Android), que no usa este archivo.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <title>Car Wash 505</title>
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: `#root,body,html{height:100dvh}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
