/* Join Two Portions of a Path
Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

Examples
joinPath("portion1", "portion2") ➞ "portion1/portion2"

joinPath("portion1/", "portion2") ➞ "portion1/portion2"

joinPath("portion1", "/portion2") ➞ "portion1/portion2"

joinPath("portion1/", "/portion2") ➞ "portion1/portion2" */

function joinPath(portion1, portion2) {
	p1 = portion1.replace('/', '');
	p2 = portion2.replace('/', '');
	return p1 + '/' + p2
}

