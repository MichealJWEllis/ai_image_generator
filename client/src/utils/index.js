import { supriseMePrompts } from "../constants/index";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * supriseMePrompts.length);
    const randomPrompt = supriseMePrompts[randomIndex];
    if (randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}
