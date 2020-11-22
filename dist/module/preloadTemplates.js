export const preloadTemplates = async function() {
	const templatePaths = [
		"systems/engineheart-vtt/templates/robot-actor-sheet.html",
		"systems/engineheart-vtt/templates/component-item-sheet.html",
		"systems/engineheart-vtt/templates/partials/robot-actor-sheet-components.html"
	];

	return loadTemplates(templatePaths);
}
