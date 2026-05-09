import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      productType,
      dimensions,
      woodType,
      description,
      file,
      file_name,
    } = body;

    const data = await resend.emails.send({
      from: "info@umejrzukorlic.xyz",
      to: "nadiholz21@gmail.com",
      subject: "Neue Nachricht von der Website",
      html: `
  <div style="
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 40px 20px;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    ">

      <!-- HEADER -->
      <div style="
        background: #111111;
        padding: 30px;
        text-align: center;
      ">
        <div style="
  font-size: 42px;
  font-weight: 700;
  color: white;
  letter-spacing: -1px;
  font-family: Georgia, serif;
">
  Nadi Holz<span style="color: #c58b45;">.</span>
</div>

        <h1 style="
          color: white;
          margin: 0;
          font-size: 28px;
          letter-spacing: 1px;
        ">
          Neue Nachricht von der Website
        </h1>
      </div>

      <!-- BODY -->
      <div style="padding: 35px;">

        <div style="margin-bottom: 25px;">
          <p style="
            margin: 0;
            color: #888;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">
            Name
          </p>

          <p style="
            margin-top: 6px;
            font-size: 18px;
            color: #111;
            font-weight: bold;
          ">
            ${name}
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <p style="
            margin: 0;
            color: #888;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">
            Email
          </p>

          <p style="
            margin-top: 6px;
            font-size: 16px;
            color: #111;
          ">
            ${email}
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <p style="
            margin: 0;
            color: #888;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">
            Telefon
          </p>

          <p style="
            margin-top: 6px;
            font-size: 16px;
            color: #111;
          ">
            ${phone || "-"}
          </p>
        </div>

        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        ">
          <div>
            <p style="
              margin: 0;
              color: #888;
              font-size: 13px;
              text-transform: uppercase;
            ">
              Produkte
            </p>

            <p style="
              margin-top: 6px;
              font-size: 16px;
              font-weight: bold;
              color: #111;
            ">
              ${productType}
            </p>
          </div>

          <div>
            <p style="
              margin: 0;
              color: #888;
              font-size: 13px;
              text-transform: uppercase;
            ">
              Abmessungen
            </p>

            <p style="
              margin-top: 6px;
              font-size: 16px;
              color: #111;
            ">
              ${dimensions || "-"}
            </p>
          </div>
        </div>

        <div style="margin-bottom: 25px;">
          <p style="
            margin: 0;
            color: #888;
            font-size: 13px;
            text-transform: uppercase;
          ">
            Eine Holzart
          </p>

          <p style="
            margin-top: 6px;
            font-size: 16px;
            color: #111;
          ">
            ${woodType || "-"}
          </p>
        </div>

        <div>
          <p style="
            margin: 0 0 10px 0;
            color: #888;
            font-size: 13px;
            text-transform: uppercase;
          ">
            Beschreibung
          </p>

          <div style="
            background: #f8f8f8;
            padding: 20px;
            border-radius: 12px;
            color: #333;
            line-height: 1.7;
            font-size: 15px;
          ">
            ${description}
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div style="
        padding: 20px;
        text-align: center;
        background: #fafafa;
        color: #999;
        font-size: 13px;
        border-top: 1px solid #eee;
      ">
        © ${new Date().getFullYear()} Nadiholz
      </div>
    </div>
  </div>
`,
      attachments: file
        ? [
            {
              filename: file_name || "upload.png",
              content: file.split("base64,")[1],
            },
          ]
        : [],
    });

    console.log(data);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      error,
    });
  }
}
