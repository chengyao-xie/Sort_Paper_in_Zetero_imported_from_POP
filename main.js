var zp = Zotero.getActiveZoteroPane();

zp.getSortedItems().forEach(async(ele, index) => {
    let noteIDs = ele.getNotes();
    let list = []
	let new_note = ''
    for (let id of noteIDs) {
        let note = Zotero.Items.get(id);
        let noteHTML = note.getNote();

        if (noteHTML) {
            // let match_res = noteHTML.match(/(\([^)]+\))[^\d]+(\d+)/)
			// new_note = match_res && match_res[1] ? `${('000000' + match_res[2]).slice(-4)} ${match_res[1]}` : ''
            
			let match_res = noteHTML.match(/(\d+)\s*cites/)
            new_note = new_note || (match_res && match_res[1] ? `${('000000' + match_res[1]).slice(-4)} ` : '')
        

        }

        // list.push(new_note)
    }
	let item_extra = ele.getField('extra');
	ele.setField('extra', (new_note ? new_note : '0000 ') + '  ' + item_extra);
	await ele.saveTx()
})
