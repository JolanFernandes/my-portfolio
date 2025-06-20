import { test, expect } from "vitest";
import {fireEvent} from '@testing-library/svelte';
import {render} from '@testing-library/svelte';
import Page from '../routes/+page.svelte';
test("LinkedIn button redirects correctly",async () => {
    const {getByText} = render(Page);
    const button = getByText("Connect on LinkedIn")

    await fireEvent.click(button);
    expect(window.location.href).toBe("https://www.linkedin.com/in/jolan-fernandes-ds2920");


})