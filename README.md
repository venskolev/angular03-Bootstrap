# FlightApp - Tutorials Angular 01

## Angular installieren
`npm install -g @angular/cli`
`ng new flight-app`

- cd flight-app
`ng serve -o`

### TODO
app.component.ts: TypeScript-Datei, die das Verhalten der Komponente definiert.

app.component.html: HTML-Datei mit der Struktur der Komponente.

app.component.scss: Datei mit lokalen Styles für die Komponente. Allgemeine Styles können in die besprochene styles.scss eingetragen werden.

## Bootstrap installieren
`ng add @angular-architects/paper-design`

### TODO
das generiert eine NavbarComponent und eine SideBarComponent für die Navigation.

# FlightApp - Tutorials Angular 02

## Angular-Komponente erzeugen
`ng generate component flight-search`
oder
`ng g c flight-search`

### Bonus: Debuggen mit Visual Studio Code
- Öffnen Sie eine beliebige .ts-Datei.
- Wählen Sie in Visual Studio Code den Befehl Run/Start Debugging oder drücken Sie F5.
- Falls Visual Studio Code Sie nach einer Umgebung (Environment) für das Debugging fragt, wählen Sie Chrome aus.
- Visual Studio Code generiert nun eine Datei launch.json und zeigt diese an.
- Korrigieren Sie in der Datei launch.json die angezeigte URL auf http://localhost:4200:

# FlightApp - Tutorials Angular 03

## Sub-Komponenten mit Event- und Property-Bindings
`ng g c flight-card`
``
`ng generate service flight`
oder 
`ng g s flight`
#
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Aspekte von Angular
https://www.angulararchitects.io/
