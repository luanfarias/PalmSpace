import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'exoplanetas', loadChildren: './pages/exoplanetas/exoplanetas.module#ExoplanetasPageModule' },
  { path: 'exoplanetas-tab-principal', loadChildren: './pages/exoplanetas-tab-principal/exoplanetas-tab-principal.module#ExoplanetasTabPrincipalPageModule'},
  { path: 'exoplanetas-tab-lista', loadChildren: './pages/exoplanetas-tab-lista/exoplanetas-tab-lista.module#ExoplanetasTabListaPageModule' },
  { path: 'cosmos', loadChildren: './pages/cosmos/cosmos.module#CosmosPageModule' },
  { path: 'sistema-solar', loadChildren: './pages/sistema-solar/sistema-solar.module#SistemaSolarPageModule' },
  { path: 'galaxia', loadChildren: './pages/galaxia/galaxia.module#GalaxiaPageModule' },
  { path: 'via-lactea', loadChildren: './pages/via-lactea/via-lactea.module#ViaLacteaPageModule' },
  { path: 'cluster', loadChildren: './pages/cluster/cluster.module#ClusterPageModule' },
  { path: 'universo-observavel', loadChildren: './pages/universo-observavel/universo-observavel.module#UniversoObservavelPageModule' },
  { path: 'estrelas', loadChildren: './pages/estrelas/estrelas.module#EstrelasPageModule' },
  { path: 'buracos-negros', loadChildren: './pages/buracos-negros/buracos-negros.module#BuracosNegrosPageModule' },
  { path: 'explorar-cosmos', loadChildren: './pages/explorar-cosmos/explorar-cosmos.module#ExplorarCosmosPageModule' },
  { path: 'estrela-formacao', loadChildren: './pages/estrela-formacao/estrela-formacao.module#EstrelaFormacaoPageModule' },
  { path: 'estrela-morte', loadChildren: './pages/estrela-morte/estrela-morte.module#EstrelaMortePageModule' },
  { path: 'estrela-tipo', loadChildren: './pages/estrela-tipo/estrela-tipo.module#EstrelaTipoPageModule' },
  { path: 'cluster-formacao', loadChildren: './pages/cluster-formacao/cluster-formacao.module#ClusterFormacaoPageModule' },
  { path: 'cluster-tipos', loadChildren: './pages/cluster-tipos/cluster-tipos.module#ClusterTiposPageModule' },
  { path: 'buraco-negro-formacao', loadChildren: './pages/buraco-negro-formacao/buraco-negro-formacao.module#BuracoNegroFormacaoPageModule' },
  { path: 'estrela-tipo-lista', loadChildren: './pages/estrela-tipo-lista/estrela-tipo-lista.module#EstrelaTipoListaPageModule' },
  { path: 'buraco-negro-estrutura', loadChildren: './pages/buraco-negro-estrutura/buraco-negro-estrutura.module#BuracoNegroEstruturaPageModule' },
  { path: 'buraco-negro-estrutura-lista', loadChildren: './pages/buraco-negro-estrutura-lista/buraco-negro-estrutura-lista.module#BuracoNegroEstruturaListaPageModule' },
  { path: 'sistema-solar-planetas', loadChildren: './pages/sistema-solar-planetas/sistema-solar-planetas.module#SistemaSolarPlanetasPageModule' },
  { path: 'sistema-solar-anoes', loadChildren: './pages/sistema-solar-anoes/sistema-solar-anoes.module#SistemaSolarAnoesPageModule' },
  { path: 'sistema-solar-asteroides', loadChildren: './pages/sistema-solar-asteroides/sistema-solar-asteroides.module#SistemaSolarAsteroidesPageModule' },
  { path: 'via-lactea-estrutura', loadChildren: './pages/via-lactea-estrutura/via-lactea-estrutura.module#ViaLacteaEstruturaPageModule' },
  { path: 'via-lactea-midia', loadChildren: './pages/via-lactea-midia/via-lactea-midia.module#ViaLacteaMidiaPageModule' },
  { path: 'exoplanetas-formacao', loadChildren: './pages/exoplanetas-formacao/exoplanetas-formacao.module#ExoplanetasFormacaoPageModule' },
  { path: 'exoplanetas-encontrados', loadChildren: './pages/exoplanetas-encontrados/exoplanetas-encontrados.module#ExoplanetasEncontradosPageModule' },
  { path: 'exoplanetas-lista-filtro', loadChildren: './pages/exoplanetas-lista-filtro/exoplanetas-lista-filtro.module#ExoplanetasListaFiltroPageModule' },
  { path: 'exoplanetas-listagem', loadChildren: './pages/exoplanetas-listagem/exoplanetas-listagem.module#ExoplanetasListagemPageModule' },
  { path: 'explorar-cosmos-mostrar', loadChildren: './pages/explorar-cosmos-mostrar/explorar-cosmos-mostrar.module#ExplorarCosmosMostrarPageModule' },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
  { path: 'galaxias-tipo-elipticas', loadChildren: './pages/galaxias-tipo-elipticas/galaxias-tipo-elipticas.module#GalaxiasTipoElipticasPageModule' },
  { path: 'galaxias-tipo-espirais', loadChildren: './pages/galaxias-tipo-espirais/galaxias-tipo-espirais.module#GalaxiasTipoEspiraisPageModule' },
  { path: 'galaxias-tipo-anas', loadChildren: './pages/galaxias-tipo-anas/galaxias-tipo-anas.module#GalaxiasTipoAnasPageModule' },
  { path: 'galaxias-tipo-outras', loadChildren: './pages/galaxias-tipo-outras/galaxias-tipo-outras.module#GalaxiasTipoOutrasPageModule' },
  { path: 'buraco-negro-singularidade', loadChildren: './pages/buraco-negro-singularidade/buraco-negro-singularidade.module#BuracoNegroSingularidadePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
