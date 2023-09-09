

var zp = Zotero.getActiveZoteroPane();

zp.getSortedItems().forEach((ele, index) => {
    let noteIDs = ele.getNotes();
    let list = []
    for (let id of noteIDs) {
        let note = Zotero.Items.get(id);
        let noteHTML = note.getNote();
        let new_note = ''
        if (noteHTML) {
            let match_res = noteHTML.match(/(\([^)]+\))[^\d]+(\d+)/)
            new_note = match_res && match_res[1] ? `${('000000' + match_res[2]).slice(-4)} ${match_res[1]}` : ''
        
            let item_extra = ele.getField('extra');
            new_note && ele.setField('extra', new_note + '  ' + item_extra);
        }
        // list.push(new_note)
    }

})
