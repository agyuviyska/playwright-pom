export type Status =
  | 'todo'
  | 'inProgress'
  | 'done'
  | 'paused'
  | 'FINished';

export type HomePageLink ={
    name: string;
    pageStatus: Status;
    testStatus: Status;
};
export const homePageLinks: HomePageLink[] = [];

await page.goto('https://the-internet.herokuapp.com/');

  await page.getByRole('link', { name: 'Form Authentication' }).click();