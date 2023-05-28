import { component$ } from '@builder.io/qwik';
import styled from './card.module.css'

export default component$(() => {
    return (
        <>
            <article class={styled.wrapper}>
                <h1 class={styled.cardHeading}>How do we use a function return type annotation in TypeScript? 
                    (Making functions TypeScript friendly) 
                </h1>
            </article>
        </>
    )   
})