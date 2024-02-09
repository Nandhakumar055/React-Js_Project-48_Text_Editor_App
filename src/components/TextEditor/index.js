import {Component} from 'react'
import {MdFormatBold, MdFormatItalic, MdFormatUnderlined} from 'react-icons/md'

import './index.css'
import {
  EditItem,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isTextBold: false,
    isTextItalic: false,
    isTextUnderline: false,
  }

  clickEditItem = id => {
    this.setState(prevState => ({
      textEditToolList: [
        ...prevState.textEditToolList.map(eachItem => {
          if (eachItem.id === id) {
            return {...eachItem, isSelected: !eachItem.isSelected}
          }
          return {...eachItem}
        }),
      ],
      textStyle: !prevState.textStyle,
    }))
  }

  onClickBold = () => {
    this.setState(prevState => ({isTextBold: !prevState.isTextBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isTextItalic: !prevState.isTextItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isTextUnderline: !prevState.isTextUnderline}))
  }

  render() {
    const {isTextBold, isTextItalic, isTextUnderline} = this.state

    const boldBtnColor = isTextBold ? ' #faff00' : ' #f1f5f9'

    const italicBtnColor = isTextItalic ? ' #faff00' : ' #f1f5f9'

    const underlineBtnColor = isTextUnderline ? ' #faff00' : ' #f1f5f9'

    const fontWeight = isTextBold ? 'bold' : 'normal'

    const fontStyle = isTextItalic ? 'italic' : 'normal'

    const textDecoration = isTextUnderline ? 'underline' : 'normal'

    return (
      <div className="text-editor-route-container">
        <div className="text-editor-main-card-container">
          <div className="text-illustration-image-container">
            <h1 className="text-editor-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="illustration-image"
            />
          </div>
          <div className="text-card-container">
            <ul className="edit-option-container">
              <EditItem>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  color={boldBtnColor}
                  onClick={this.onClickBold}
                >
                  <MdFormatBold size="25" />
                </BoldButton>
              </EditItem>
              <EditItem>
                <ItalicButton
                  type="button"
                  data-testid="italic"
                  color={italicBtnColor}
                  onClick={this.onClickItalic}
                >
                  <MdFormatItalic size="25" />
                </ItalicButton>
              </EditItem>
              <EditItem>
                <UnderlineButton
                  type="button"
                  data-testid="underline"
                  color={underlineBtnColor}
                  onClick={this.onClickUnderline}
                >
                  <MdFormatUnderlined size="25" />
                </UnderlineButton>
              </EditItem>
            </ul>
            <div className="text-typing-container">
              <TextArea
                placeholder="Text here!"
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
