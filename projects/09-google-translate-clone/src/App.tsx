import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useTranslate } from './hooks/useTranslate';
import { AUTO_LANGUAGE } from './constants/general';
import { AppIcon, ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';
import { TranslateOptions } from './components/TranslateOptions';
import { CopyToClipboard } from './components/CopyToClipboard';
import { Toaster } from 'react-hot-toast';
import { TextToSpeech } from './components/TextToSpeech';

function App() {
  const {
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    state: { fromLanguage, toLanguage, fromText, result, loading },
  } = useTranslate();

  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            className: 'custom-toast',
          }}
        />
      </div>
      <Container fluid>
        <Row>
          <Col className="text-center mb-5 d-flex align-items-center justify-content-center column-gap-2">
            <AppIcon />
            <h1>React Translate</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack gap={3}>
              <LanguageSelector
                type={SectionType.from}
                value={fromLanguage}
                onChange={setFromLanguage}
              />
              <div className="">
                <TextArea
                  type={SectionType.from}
                  value={fromText}
                  onChange={setFromText}
                ></TextArea>
                <TranslateOptions>
                  <CopyToClipboard valueToCopy={fromText} />
                </TranslateOptions>
              </div>
            </Stack>
          </Col>
          <Col className="text-center" xs="auto">
            <Button
              variant="link"
              onClick={interchangeLanguages}
              disabled={fromLanguage === AUTO_LANGUAGE}
            >
              <ArrowsIcon />
            </Button>
          </Col>
          <Col>
            <Stack gap={3}>
              <LanguageSelector
                type={SectionType.to}
                value={toLanguage}
                onChange={setToLanguage}
              />
              <div className="">
                <TextArea
                  type={SectionType.to}
                  value={result}
                  onChange={setResult}
                  loading={loading}
                ></TextArea>
                <TranslateOptions background="#f5f5f5">
                  <CopyToClipboard valueToCopy={result} />
                  <TextToSpeech text={result} />
                </TranslateOptions>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
