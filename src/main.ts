import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import HelloWorld from './widgets/HelloWorld';
const { Grid } = require('./dgrid');

const columns = {
	first: {
		label: "First Name"
	},
	last: {
		label: "Last Name"
	}
};
const arrayOfData = [
	{ first: 'John', last: 'Smith' },
	{ first: 'James', last: 'Dean' }
]
var grid = new Grid({ columns: columns }, 'grid'); // attach to a DOM id
grid.renderArray(arrayOfData); // render some data

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const Projector = ProjectorMixin(HelloWorld);
const projector = new Projector();

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
