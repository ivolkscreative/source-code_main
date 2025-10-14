export const contactFormTemplate = ({ firstName, lastName, email, purpose, commentMessage }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #e02424 0%, #c41e1e 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.95; font-size: 14px;">
                You've received a new inquiry
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Hello iVolks Team,
              </p>
              <p style="margin: 0 0 30px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                A new contact form has been submitted through your website. Please review the details below and respond promptly.
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; border-left: 5px solid #e02424; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                      <tr>
                        <td width="120" style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">
                          Name:
                        </td>
                        <td style="color: #333333; font-size: 15px; font-weight: 500;">
                          ${firstName} ${lastName}
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                      <tr>
                        <td width="120" style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">
                          Email:
                        </td>
                        <td style="color: #e02424; font-size: 15px; font-weight: 500;">
                          <a href="mailto:${email}" style="color: #e02424; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td width="120" style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">
                          Purpose:
                        </td>
                        <td style="color: #333333; font-size: 15px; font-weight: 500;">
                          ${purpose}
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; padding-bottom: 10px;">
                          Message:
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #ffffff; padding: 15px; border-radius: 6px; color: #333333; font-size: 14px; line-height: 1.8; white-space: pre-wrap; border: 1px solid #e0e0e0;">
                          ${commentMessage}
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #e02424 0%, #c41e1e 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-size: 15px; font-weight: 600; box-shadow: 0 3px 8px rgba(224, 36, 36, 0.3);">
                      Reply to ${firstName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.5;">
                This email was automatically generated by <strong style="color: #dc2626;">The iVolks Creative Contact System</strong>.
                <br>Please ensure timely follow-up with the sender.
            </p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                    PT. Sinergi Imaji Ekspresi – iVolks Creative | We turn concepts into reality
                </p>
            </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};