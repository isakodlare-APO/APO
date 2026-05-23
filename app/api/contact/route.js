export async function POST(req) {
  try {
    const { name, email, message, captchaToken } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Alla fält måste fyllas i." },
        { status: 400 }
      );
    }

    if (!captchaToken) {
      return Response.json(
        { success: false, message: "CAPTCHA saknas." },
        { status: 400 }
      );
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: captchaToken,
        }),
      }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return Response.json(
        { success: false, message: "CAPTCHA kunde inte verifieras." },
        { status: 403 }
      );
    }

    // Här skickar du mejlet / sparar meddelandet
    console.log("Nytt kontaktmeddelande:", {
      name,
      email,
      message,
    });

    return Response.json({
      success: true,
      message: "Meddelandet skickades!",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Något gick fel." },
      { status: 500 }
    );
  }
}