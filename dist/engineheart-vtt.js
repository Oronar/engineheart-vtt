// Import JavaScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import RobotActor from './module/actors/RobotActor.js';
import ComponentItem from './module/items/ComponentItem.js';
import RobotActorSheet from './module/sheets/RobotActorSheet.js';
import ComponentItemSheet from './module/sheets/ComponentItemSheet.js';

/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('engineheart-vtt | Initializing engineheart-vtt');

	// Assign custom classes and constants here
	CONFIG.Actor.entityClass = RobotActor;
	CONFIG.Item.entityClass = ComponentItem;
	
	// Register custom system settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
	Actors.unregisterSheet('core', ActorSheet);
	Actors.registerSheet('engineheart-vtt', RobotActorSheet, { types: ['robot'], makeDefault: true });

	Items.unregisterSheet('core', ItemSheet);
	Items.registerSheet('engineheart-vtt', ComponentItemSheet, { types: ["component"], makeDefault: true });
});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary
