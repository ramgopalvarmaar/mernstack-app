import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { FormGroup, Label, Input, Spinner, Col, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

const Dictaphone = (props) => {
  
  const [message, setMessage] = useState('')
  const [newCard, setNewCard] = useState([]);

  const commands = [
    {
      command: 'I would like to order *',
      callback: (food) => setMessage(`Your order is for: ${food}`)
    },
    {
      command: 'The weather is :condition today',
      callback: (condition) => setMessage(`Today, the weather is ${condition}`)
    },
    {
      command: 'My top sports are * and *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    },
    {
      command: 'Pass the salt (please)',
      callback: () => setMessage('My pleasure')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!'),
      matchInterim: true
    },
    {
      command: 'Yes',
      callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    }
  ]

  const { transcript, resetTranscript, listening} = useSpeechRecognition({ commands })

  console.log("###############listening##########");
  console.log(listening);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  function saveNotes(){
    SpeechRecognition.abortListening();
    console.log("noteText");
    console.log({transcript});
    setNewCard(newCard.concat(<NotesCard/>))
  }

  const NotesCard = () => {
    return <Card body>
              <CardTitle>Transcibed notes</CardTitle>
              <CardText>{transcript}</CardText>
              <Button>Share</Button>
            </Card>;
  };

  return (
    <div>
      <Card style={{alignItems: 'center'}}>
        {!listening && <FontAwesomeIcon style={{marginTop: '1%'}} color='red' onClick={() => SpeechRecognition.startListening({ continuous: true })} icon={faMicrophone} size ="4x"/>}
        {listening && <FontAwesomeIcon style={{marginTop: '1%'}} color='red' onClick={() => SpeechRecognition.abortListening()} icon={faMicrophoneSlash} size ="4x"/>}
        &nbsp;
        {listening && <Spinner size="md" color="primary" />}
        <CardBody>
          <CardText>{transcript}</CardText>
          <Button style={{marginLeft: '10px'}} onClick={() => saveNotes()}>Save</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={resetTranscript} style={{marginRight: '10px'}}>Discard</Button>
        </CardBody>
      </Card>
      {newCard}
    </div>
  )
}
export default Dictaphone