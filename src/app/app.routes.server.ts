import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'livros/editar/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => {
      // Define the parameters to prerender for this route
      const ids = [1, 2, 3]; // Replace with the actual IDs you want to prerender
      return Promise.resolve(ids.map(id => ({ id: id.toString() })));
    }
  }  
];
