# Progetto Settimanale

## Descrizione per il professore.

La navbar permette di navigare tra la route home,la route dei to-dos completati e quella dei to-dos non completati. E' presente, inoltre, la route degli users.

Al caricamento dell'applicazione, viene visualizzato il component home, il quale contiene la lista completa di tutti i to-dos.
Quando viene fatto il "check" o l' "uncheck" su un to-do, verrà passato il suo nuovo stato "completed: true" o "completed: false" a un metodo nel service che provvede ad aggiornare la lista di to-dos con le nuove modifiche, ed esso cambierà colore, diventando verde se spuntato e rosso se deselezionato.

Cliccando nella navbar il link "See how much we've accomplished!" verrà cambiata la rotta e caricato il componente che contiene i to-dos completati, mentre cliccando il link "What's left?" verrà cambiata la rotta e caricato il componente che contiene i to-dos non completati.
Nel componente completed, se viene deselezionato un to-do, esso non sarà più visibile nella pagina, perché, in modo simile a quanto fatto nella home, verrà cambiata la sua proprietà completed, che assumerà valore false e farà passare il to-do specifico nel componente che contiene i to-do incompleti.
Allo stesso modo, spuntando invece un to-do nel componente incompleted, esso non sarà più visibile nella pagina, in quanto verrà cambiata la sua proprietà completed, che assumerà valore true e farà passare il to-do specifico nel componente che contiene i to-dos completati.

Cliccando nella navbar il link "By User" verrà cambiata la rotta e caricato il componente che contiene l'elenco degli users, con indicati per ogni user i to-dos che gli sono stati assegnati. Anche qui, come nella home, quando viene fatto il "check" o l' "uncheck" su un to-do, verrà passato il suo nuovo stato "completed: true" o "completed: false" a un metodo nel service che provvede ad aggiornare la lista di to-dos con le nuove modifiche, ed esso cambierà colore, diventando verde se spuntato e rosso se deselezionato.

## Parte relativa ad angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

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
