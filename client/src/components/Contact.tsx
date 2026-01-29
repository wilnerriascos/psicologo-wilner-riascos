import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

// Initialize EmailJS with your public key
emailjs.init('kzHJZrLCPJMWXrjAe');

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
      // Format the date for display
      const dateObj = new Date(formData.date);
      const formattedDate = dateObj.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      // Send email using EmailJS
      await emailjs.send('service_wilner_psychology', 'template_appointment_request', {
        to_email: 'wilner.riascos@gmail.com',
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        appointment_date: formattedDate,
        appointment_time: formData.time,
        client_message: formData.message || 'Sin mensaje adicional',
      });

      // Show success message
      toast.success('¡Cita agendada exitosamente! Te contactaremos pronto para confirmar.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Generate available times
  const availableTimes = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  // Get next 30 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 text-lg">
            {t('contact.description')}
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-muted border-0 shadow-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="bg-white border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="bg-white border-border"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.phone')}
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+57 (123) 456-7890"
                  className="bg-white border-border"
                />
              </div>

              {/* Date and Time Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    {t('contact.date')}
                  </label>
                  <select
                    name="date"
                    value={formData.date}
                    onChange={(e) => handleChange(e as any)}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona una fecha</option>
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.time')}
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={(e) => handleChange(e as any)}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona una hora</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu situación (opcional)"
                  className="bg-white border-border min-h-32"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : t('contact.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-white border-0 shadow-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
              <p className="text-foreground/70 text-sm">
                100% Online
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
              <p className="text-foreground/70 text-sm">
                +55 (11) 96604-7554
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70 text-sm">
                wilner.riascos@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
