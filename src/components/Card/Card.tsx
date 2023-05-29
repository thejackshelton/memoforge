import { component$, useStyles$ } from '@builder.io/qwik';
import '@fontsource-variable/nunito';
import styles from './test.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <article class="wrapper">
        <h1 class="heading">
          How do we use a function return type annotation in TypeScript?
        </h1>
      </article>
    </>
  );
});
