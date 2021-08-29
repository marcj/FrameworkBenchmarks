import {} from "@deepkit/template";
import { Fortune } from "./fortune.entity";

const doctype = `<!DOCTYPE html>`;

export const Fortunes = (props: { fortunes: Fortune[] }) => {
  const { fortunes } = props;
  return (
    <>
      {`<!DOCTYPE html>`}
      <html>
        <head>
          <title>Fortunes</title>
        </head>
        <body>
          <table>
            <tr>
              <th>id</th>
              <th>message</th>
            </tr>
            {fortunes.map(({ id, message }) => (
              <tr>
                <td>{id}</td>
                <td>{message}</td>
              </tr>
            ))}
          </table>
        </body>
      </html>
    </>
  );
};
