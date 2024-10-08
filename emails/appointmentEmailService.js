import { createTransport } from '../config/nodemailer.js';

export async function sendEmailNewAppointment({ date, time }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );

  const info = await transporter.sendMail({
    from: 'AppSalon <citas@appsalon.com>',
    to: 'admin@appsalon',
    subject: 'AppSalon - Nueva Cita',
    text: 'AppSalon - Nueva Cita',
    html: `<p>Hola: Admin tienes una nueva cita</p>
    <p>La cita será el dia ${date} a las ${time}</p>
    `,
  });

  console.log('Mensaje enviado', info.messageId);
}

export async function sendEmailUpdateAppointment({ date, time }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );

  const info = await transporter.sendMail({
    from: 'AppSalon <citas@appsalon.com>',
    to: 'admin@appsalon',
    subject: 'AppSalon - Cita Actualizada',
    text: 'AppSalon - Cita Actualizada',
    html: `<p>Hola: Admin Una cita ha sido actualizada</p>
    <p>La cita será el dia ${date} a las ${time}</p>
    `,
  });

  console.log('Mensaje enviado', info.messageId);
}

export async function sendEmailCancelAppointment({ date, time }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );

  const info = await transporter.sendMail({
    from: 'AppSalon <citas@appsalon.com>',
    to: 'admin@appsalon',
    subject: 'AppSalon - Cita Cancelada',
    text: 'AppSalon - Cita Cancelada',
    html: `<p>Hola: Admin Una cita ha sido Cancelada</p>
    <p>La cita del dia ${date} a las ${time} ha sido Cancelada</p>
    `,
  });

  console.log('Mensaje enviado', info.messageId);
}
