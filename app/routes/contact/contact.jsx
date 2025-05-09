import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form } from '@remix-run/react';
import styles from './contact.module.css';
import emailjs from '@emailjs/browser';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      `Send me a message if you're interested in discussing a project or if you just want to say hi`,
  });
};

const MAX_NAME_LENGTH = 4096;
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export const Contact = () => {
  const errorRef = useRef();
  const name = useFormInput('')
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};

     if (!name.value) {
      formErrors.name = 'Please enter your name.';
    }

    if (!email.value || !EMAIL_PATTERN.test(email.value)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    if (!message.value) {
      formErrors.message = 'Please enter a message.';
    }

    if (message.value.length > MAX_NAME_LENGTH) {
      formErrors.message = `Message must be shorter than ${MAX_NAME_LENGTH} characters.`;
    }

    if (email.value.length > MAX_EMAIL_LENGTH) {
      formErrors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    }

    if (message.value.length > MAX_MESSAGE_LENGTH) {
      formErrors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Novic Tonleu',
          to_email: import.meta.env.VITE_EMAILJS_RECEIVER,
          from_name: name.value,
          from_email: email.value,
          message_html: message.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Réinitialiser les champs après envoi réussi
      name.onChange({ target: { value: '' } });
      email.onChange({ target: { value: '' } });
      message.onChange({ target: { value: '' } });
      setSuccess(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrors({ global: `❌ Échec de l'envoi. Veuillez réessayer.` });
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
  };

  return (
    <Section className={styles.contact}>
      {!success ? (
        <Transition unmount in={!success} timeout={1600}>
          {({ status, nodeRef }) => (
            <Form
              className={styles.form}
              onSubmit={handleSubmit}
              ref={nodeRef}
            >
              <Heading
                className={styles.title}
                data-status={status}
                level={3}
                as="h1"
                style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
              >
                <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
              </Heading>
              <Divider
                className={styles.divider}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
              />
             <Input
                required
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay)}
                autoComplete="name"
                label="Your Name"
                type="name"
                name="name"
                maxLength={MAX_NAME_LENGTH}
               {...name}
              />
              <Input
                required
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay)}
                autoComplete="email"
                label="Your email"
                type="email"
                name="email"
                maxLength={MAX_EMAIL_LENGTH}
                {...email}
              />
              <Input
                required
                multiline
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationS, initDelay)}
                autoComplete="off"
                label="Message"
                name="message"
                maxLength={MAX_MESSAGE_LENGTH}
                {...message}
              />
              {errors.global && (
                <div className={styles.formError}>
                  <div className={styles.formErrorContent}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {errors.global}
                    </div>
                  </div>
                </div>
              )}
              <Button
                className={styles.button}
                data-status={status}
                style={getDelay(tokens.base.durationM, initDelay)}
                disabled={isSending}
                loading={isSending}
                loadingText="Sending..."
                icon="send"
                type="submit"
              >
                Send message
              </Button>
            </Form>
          )}
        </Transition>
      ) : (
        <Transition unmount in={success}>
          {({ status, nodeRef }) => (
            <div className={styles.complete} aria-live="polite" ref={nodeRef}>
              <Heading
                level={3}
                as="h3"
                className={styles.completeTitle}
                data-status={status}
              >
                Message Sent
              </Heading>
              <Text
                size="l"
                as="p"
                className={styles.completeText}
                data-status={status}
                style={getDelay(tokens.base.durationXS)}
              >
                I'll get back to you within a couple days, sit tight
              </Text>
              <Button
                secondary
                iconHoverShift
                className={styles.completeButton}
                data-status={status}
                style={getDelay(tokens.base.durationM)}
                onClick={resetForm}
                icon="chevron-right"
              >
                Send another message
              </Button>
            </div>
          )}
        </Transition>
      )}
      <Footer className={styles.footer} />
    </Section>
  );
}

// http://www.fiverr.com/s/0b84bmL
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}