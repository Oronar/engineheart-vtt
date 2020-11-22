export const preloadTemplates = async function() {
	const templatePaths = [
		"systems/engineheart-vtt/templates/robot-actor-sheet.html",
		"systems/engineheart-vtt/templates/component-item-sheet.html"
	];

	return loadTemplates(templatePaths);
}
