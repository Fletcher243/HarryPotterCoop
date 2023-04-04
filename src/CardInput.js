import React from 'react'
import Select from 'react-select'
import { getDatabase, ref, push } from "firebase/database";

const CardInput = () => {

  const NAME = 'name'
  const TEXT = 'text'
  
  const COST = 'cost'
  const REWARD = 'reward'
  const LIFE = 'life'
  const TYPE = 'type'
  const CONTROL = 'control'

  const [selectValue, setSelectValue] = React.useState("")
  const [nameValue, setNameValue] = React.useState("")
  const [textValue, setTextValue] = React.useState("")
  
  const [rewardValue, setRewardValue] = React.useState("")
  const [typeValue, setTypeValue] = React.useState("")
  const [costValue, setCostValue] = React.useState("")
  const [lifeValue, setLifeValue] = React.useState("")
  const [controlValue, setControlValue] = React.useState("")
  const [deckValue, setDeckValue] = React.useState("")

  const onChange = (option) => {
    setSelectValue(option)
  }

  const db = getDatabase();

  const writeToDatabase = (path, object) => {
    const key = push(ref(db, `cards/${path}`), object).key
    push (ref(db, `decks/${deckValue}`), key)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let cardObject = {
      name: nameValue,
      text: textValue,
      reward: selectValue.label && showOptions[selectValue.label].includes(REWARD) ? rewardValue : null,
      type: selectValue.label && showOptions[selectValue.label].includes(TYPE) ? typeValue : null,
      cost: selectValue.label && showOptions[selectValue.label].includes(COST) ? costValue : null,
      life: selectValue.label && showOptions[selectValue.label].includes(LIFE) ? lifeValue : null,
      control: selectValue.label && showOptions[selectValue.label].includes(CONTROL) ? controlValue : null,
    }
    
    writeToDatabase(selectValue.value, cardObject)
  }

  const options = [
    { value: 'store', 'label': 'Store' },
    { value: 'villain', 'label': 'Villain' },
    { value: 'location', 'label': 'Location' },
    // { value: 'character', 'label': 'Character' },
    { value: 'dark Arts', 'label': 'Dark Arts' }
  ]
  const typeOptions = [
    { value: 'spell', label: 'Spell' },
    { value: 'ally', label: 'Ally' },
    { value: 'item', label: 'Item' }
  ]

  const deckOptions = [
    { value: 'harry', label: 'Harry'},
    { value: 'hermione', label: 'Hermione'},
    { value: 'ron', label: 'Ron'},
    { value: 'neville', label: 'Neville'},
    { value: 'one', label: 'Year 1'},
    { value: 'two', label: 'Year 2'},
    { value: 'three', label: 'Year 3'},
    { value: 'four', label: 'Year 4'},
    { value: 'five', label: 'Year 5'},
    { value: 'six', label: 'Year 6'},
    { value: 'seven', label: 'Year 7'},
  ]

  const showOptions = {
    Store: [TYPE, COST],
    Villain: [REWARD, LIFE],
    Location: [CONTROL],
    'Dark Arts': [],
  }

  const handleNameChange = (name) => {
    setNameValue(name.target.value)
  }
  const handleTextChange = (name) => {
    setTextValue(name.target.value)
  }
  const handleCostChange = (name) => {
    setCostValue(name.target.value)
  }
  const handleRewardChange = (name) => {
    setRewardValue(name.target.value)
  }
  const handleLifeChange = (name) => {
    setLifeValue(name.target.value)
  }
  const handleDeckChange = (name) => {
    setDeckValue(name.value)
  }
  const handleTypeChange = (name) => {
    setTypeValue(name.value)
  }
  const handleControlChange = (name) => {
    setControlValue(name.target.value)
  }
  const instructions = "Input information for cards. For symbols use words in brackets: \{coin\}, \{attack\}, \{life\}, \{control\}" 
  return (<div>
    <p>
      {instructions}
    </p>
    <Select options={options} onChange={onChange} />
    <form onSubmit={handleSubmit}>
      <label>
      <br /> Name: 
        <input type='text' value={nameValue} onChange={handleNameChange} />
      </label>
      <label>
      <br /> Text:  
        <input type='text' value={textValue} onChange={handleTextChange} />
      </label>
      { selectValue.label && showOptions[selectValue.label].includes(COST) ? 
          <label> 
            <br /> Cost:  
            <input type='text' value={costValue} onChange={handleCostChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(REWARD) ? 
          <label> 
            <br /> Reward:  
            <input type='text' value={rewardValue} onChange={handleRewardChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(LIFE) ? 
          <label> 
            <br /> Life:  
            <input type='text' value={lifeValue} onChange={handleLifeChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(CONTROL) ? 
          <label> 
            <br /> Control:  
            <input type='text' value={controlValue} onChange={handleControlChange} />
          </label>
        : '' }
        { selectValue.label && showOptions[selectValue.label].includes(TYPE) ? 
          <label> 
            <br /> Type:  
            <Select options={typeOptions} onChange={handleTypeChange} />
          </label>
        : '' }
        <label> 
          <br /> Deck/Deck/Year/Whatever:  
          <Select options={deckOptions} onChange={handleDeckChange} />
        </label>
      <input type='submit' value="Submit"/>
    </form>
  </div>);
}

export default CardInput
