export const autoReplyTemplate = ({ firstName, lastName, purpose, commentMessage }) => {
  const purposeLabels = {
    just_say_hello: "Just Say Hello",
    career_inquires: "Career Inquiries",
    screening_inquires: "Screening Inquiries",
    create_branded_video: "Create Branded Video"
  };

  const purposeLabel = purposeLabels[purpose] || purpose;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #e02424 0%, #c41e1e 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                Thank You for Reaching Out!
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.95; font-size: 14px;">
                We've received your message
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi ${firstName},
              </p>
              <p style="margin: 0 0 30px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                Thank you for contacting <strong style="color: #e02424;">iVolks Creative</strong>! We've successfully received your message and appreciate you taking the time to reach out to us.
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; border-left: 5px solid #e02424; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <p style="margin: 0 0 15px 0; color: #e02424; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Your Submission Details
                    </p>
                    
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
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td width="120" style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">
                          Purpose:
                        </td>
                        <td style="color: #333333; font-size: 15px; font-weight: 500;">
                          ${purposeLabel}
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; padding-bottom: 10px;">
                          Your Message:
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
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 6px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.6;">
                      <strong style="display: block; margin-bottom: 8px;">What happens next?</strong>
                      Our team is reviewing your message and will get back to you within <strong>24-48 hours</strong>. We're excited to discuss your project with you!
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 25px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                If you have any urgent questions or additional information to share, feel free to reply directly to this email.
              </p>

              <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #e02424;">The iVolks Creative Team</strong>
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.5;">
                This is an automated confirmation from <strong style="color: #dc2626;">iVolks Creative Contact System</strong>.
                <br>We look forward to connecting with you!
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