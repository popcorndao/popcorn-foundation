declare module 'tabler-react';

declare module "*.svg" {
  const content: any;
  export default content;
  export { ReactComponent };
}
