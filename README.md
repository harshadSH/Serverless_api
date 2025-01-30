# Email Service with AWS SES

This project provides an API that allows users to send emails through AWS Simple Email Service (SES). Built using Node.js and AWS SDK, this service offers a reliable and scalable way to handle email deliveries.

## Features
- Send personalized emails to one or multiple recipients.
- Supports HTML and plain text email formats.
- Easy integration with AWS SES for email delivery.
- Secure access using AWS credentials.
- API endpoints to send emails via HTTP requests.

## Requirements
Before you begin, ensure you have the following:
- Node.js (v14 or higher)
- AWS Account with SES configured
- Access to an AWS IAM role with SES permissions (`AmazonSESFullAccess`)
- A verified email address in AWS SES (can be added in the SES Console)
  
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/email-service.git
