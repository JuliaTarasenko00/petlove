import { AuthButton } from '../ui/Button';

interface IRender {
  mainPage: boolean;
  auth: boolean;
}

export const RenderAuthComponent = ({ mainPage, auth }: IRender) => {
  return (
    <>
      {auth && <p>User Data</p>}
      {!auth && <AuthButton mainPage={mainPage} />}
    </>
  );
};
