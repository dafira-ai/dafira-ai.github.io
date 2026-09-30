// Every website form is delivered by email to one inbox.
// The site is static, so submissions go through FormSubmit (https://formsubmit.co), which relays them to FORM_RECIPIENT.
// First submission: FormSubmit emails an activation link to FORM_RECIPIENT that must be clicked once.
export const FORM_RECIPIENT = 'info@dafira.ai';
const ENDPOINT = `https://formsubmit.co/ajax/${FORM_RECIPIENT}`;

const ERROR_TEXT: Record<string, string> = {
  en: `Your message could not be sent. Please try again or write to ${FORM_RECIPIENT}.`,
  fr: `Votre message n’a pas pu être envoyé. Réessayez ou écrivez à ${FORM_RECIPIENT}.`,
  nl: `Uw bericht kon niet worden verzonden. Probeer opnieuw of schrijf naar ${FORM_RECIPIENT}.`,
  ar: `تعذّر إرسال رسالتك. حاول مرة أخرى أو راسلنا على ${FORM_RECIPIENT}.`,
};

function showError(form: HTMLFormElement) {
  let el = form.querySelector<HTMLParagraphElement>('[data-form-error]');
  if (!el) {
    el = document.createElement('p');
    el.dataset.formError = '';
    el.setAttribute('role', 'alert');
    el.className = 'text-sm text-red-700';
    form.appendChild(el);
  }
  const lang = document.documentElement.lang || 'en';
  el.textContent = ERROR_TEXT[lang] ?? ERROR_TEXT.en;
}

/**
 * Sends the form's fields to FORM_RECIPIENT. Returns true when delivered.
 * On failure an inline error is shown in the form (unless `silent`).
 */
export async function sendForm(form: HTMLFormElement, formName: string, options: { silent?: boolean } = {}): Promise<boolean> {
  const data: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === 'string' && value.trim()) data[key] = value.trim();
  });
  data._subject = `Dafira website · ${formName}`;
  data._template = 'table';
  data._captcha = 'false';
  data.form = formName;
  data.page = window.location.href;

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (button) button.disabled = true;
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    form.querySelector('[data-form-error]')?.remove();
    return true;
  } catch (error) {
    console.error('[sendForm]', formName, error);
    if (!options.silent) showError(form);
    return false;
  } finally {
    if (button) button.disabled = false;
  }
}
