export enum RoutePath {
  MainPage = "/",
  CatalogPage = "/catalog",
  AboutUsPage = "/aboutUs",
  ContactsPage = "/contacts",
  ProductPage = "/product-page",
}

export interface NavRoute {
  title: string;
  path: RoutePath;
}
