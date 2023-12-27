import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            sisaKarakter: 50,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        const inputText = event.target.value
        const sisaKarakter = 50 - inputText.length

        if (sisaKarakter >= 0 ) {
            this.setState({
                title: inputText,
                sisaKarakter,
            })
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.addNotes(this.state)
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h1>Buat Catatan</h1>
                <p className="note-input__title__char-limit">Sisa karakter: {this.state.sisaKarakter}</p>
                <input 
                className="note-input__title" 
                type="text" 
                placeholder="Tulis judul disini..." 
                required 
                value={this.state.title} 
                onChange={this.onTitleChangeEventHandler}/>
                <textarea 
                className="note-input__body" 
                cols="30" 
                rows="10" 
                placeholder="Tuliskan catatanmu disini..." 
                required 
                value={this.state.body} 
                onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NotesInput