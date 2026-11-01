import React from 'react';
import './Reviews.css';

const reviews = [
  { name: 'Jordan Miller', locale: 'en', role: 'Startup founder', text: 'Adham took a rough product idea and turned it into a clean, responsive experience that our users understood immediately.' },
  { name: 'Maya Thompson', locale: 'en', role: 'Small business owner', text: 'The communication was clear, the delivery was fast, and the final website feels much more polished than I imagined.' },
  { name: 'Ethan Brooks', locale: 'en', role: 'Product manager', text: 'He handled the frontend details carefully and solved every issue without making the process complicated.' },
  { name: 'Olivia Carter', locale: 'en', role: 'Creative director', text: 'A thoughtful developer with a strong eye for usability. The result looks great and works even better.' },
  { name: 'Noah Williams', locale: 'en', role: 'Founder', text: 'Adham delivered a reliable web app on schedule and kept me updated at every important step.' },
  { name: 'Ava Johnson', locale: 'en', role: 'Consultant', text: 'He translated my scattered notes into a simple, professional website that is easy to manage.' },
  { name: 'Liam Davis', locale: 'en', role: 'E-commerce owner', text: 'The new storefront is faster, easier to navigate, and much more convincing for first-time customers.' },
  { name: 'Sophia Wilson', locale: 'en', role: 'Marketing lead', text: 'Great attention to detail and a real understanding of how design and performance work together.' },
  { name: 'Mason Anderson', locale: 'en', role: 'SaaS founder', text: 'Adham was proactive, honest about tradeoffs, and delivered a product we were proud to launch.' },
  { name: 'Isabella Moore', locale: 'en', role: 'Freelance consultant', text: 'The interface is clean, responsive, and exactly right for the audience we wanted to reach.' },
  { name: 'James Taylor', locale: 'en', role: 'Operations manager', text: 'He made a complicated workflow feel simple and dependable for our team.' },
  { name: 'Charlotte Thomas', locale: 'en', role: 'Course creator', text: 'The landing page communicates the value of my course clearly and looks excellent on mobile.' },
  { name: 'Benjamin Jackson', locale: 'en', role: 'Business owner', text: 'Professional from the first conversation to the final handoff. I would gladly work with him again.' },
  { name: 'Amelia White', locale: 'en', role: 'Designer', text: 'Adham listened carefully to the visual direction and improved the experience with smart technical choices.' },
  { name: 'Lucas Harris', locale: 'en', role: 'Startup operator', text: 'Fast, capable, and easy to collaborate with. The project moved forward every week.' },
  { name: 'Harper Martin', locale: 'en', role: 'Coach', text: 'My site finally feels like a true reflection of my brand. The result is clear, warm, and professional.' },
  { name: 'Henry Thompson', locale: 'en', role: 'Agency owner', text: 'Strong React skills, careful implementation, and excellent follow-through.' },
  { name: 'Evelyn Garcia', locale: 'en', role: 'Founder', text: 'He improved the speed and structure of our app without losing the personality of the design.' },
  { name: 'Daniel Martinez', locale: 'en', role: 'Product owner', text: 'The whole build was organized and transparent, and the finished product feels dependable.' },
  { name: 'Ella Robinson', locale: 'en', role: 'Photographer', text: 'My portfolio now feels premium and effortless to browse. I have already received better inquiries.' },
  { name: 'Michael Clark', locale: 'en', role: 'Consultant', text: 'Adham combines practical engineering with a very good sense of what clients actually need.' },
  { name: 'Grace Rodriguez', locale: 'en', role: 'Retail owner', text: 'The website is faster, clearer, and much easier for customers to use.' },
  { name: 'Alexander Lewis', locale: 'en', role: 'Founder', text: 'Excellent work on both the backend integration and the user-facing details.' },
  { name: 'Lily Lee', locale: 'en', role: 'Educator', text: 'He was patient with feedback and turned each round of notes into meaningful improvements.' },
  { name: 'Samuel Walker', locale: 'en', role: 'Business owner', text: 'A dependable developer who cares about the final experience, not just getting the code finished.' },
  { name: 'محمود السيد', locale: 'ar', role: 'صاحب مشروع', text: 'أدهم فهم فكرتي بسرعة وحولها لموقع شكله احترافي وسهل جداً في الاستخدام.' },
  { name: 'سارة محمد', locale: 'ar', role: 'صاحبة بيزنس', text: 'التعامل كان محترم وواضح، والموقع طلع أحسن بكتير من اللي كنت متخيلاه.' },
  { name: 'كريم حسن', locale: 'ar', role: 'مؤسس ستارت أب', text: 'حل المشاكل بسرعة وكان دايماً بيشرحلي كل خطوة بطريقة بسيطة.' },
  { name: 'نور أحمد', locale: 'ar', role: 'مصممة', text: 'عنده عين حلوة في التصميم واهتم جداً بتفاصيل تجربة المستخدم.' },
  { name: 'عمر خالد', locale: 'ar', role: 'صاحب متجر', text: 'المتجر بقى أسرع وأسهل للعميل، وده فرق معانا في الطلبات.' },
  { name: 'منة علي', locale: 'ar', role: 'صانعة محتوى', text: 'أدهم كان متعاون جداً وفهم الهوية بتاعت البراند من أول مرة.' },
  { name: 'يوسف إبراهيم', locale: 'ar', role: 'مدير مشروع', text: 'التسليم كان في معاده والكود منظم وسهل نكمل عليه بعد كده.' },
  { name: 'بسنت محمود', locale: 'ar', role: 'مدربة', text: 'الموقع بقى بيوصل رسالتي بشكل أوضح وبيشتغل ممتاز على الموبايل.' },
  { name: 'أحمد رجب', locale: 'ar', role: 'صاحب شركة', text: 'شغل احترافي والتواصل كان ممتاز طول فترة المشروع.' },
  { name: 'ريم مصطفى', locale: 'ar', role: 'مستقلة', text: 'حول الأفكار اللي كانت ملخبطة عندي لتجربة مرتبة وجميلة.' },
  { name: 'حسن فتحي', locale: 'ar', role: 'مطور', text: 'عنده خبرة قوية في React وبيفكر في الحل الصح مش أسرع حل وخلاص.' },
  { name: 'داليا سمير', locale: 'ar', role: 'صاحبة مشروع', text: 'النتيجة طلعت شيك جداً والناس بدأت تاخد البراند بجدية أكتر.' },
  { name: 'إسلام طارق', locale: 'ar', role: 'مؤسس', text: 'أدهم ملتزم ومريح في التعامل وبيخلص المطلوب باهتمام.' },
  { name: 'هبة ياسر', locale: 'ar', role: 'مصممة جرافيك', text: 'اهتم بالتفاصيل الصغيرة اللي فعلاً خلت الموقع يبان مختلف.' },
  { name: 'زياد أشرف', locale: 'ar', role: 'صاحب تطبيق', text: 'ساعدنا نطلع نسخة مستقرة وسريعة من التطبيق في وقت مناسب.' },
  { name: 'مي عبد الله', locale: 'ar', role: 'مستشارة', text: 'شرح كل حاجة بهدوء وكان بياخد الملاحظات ويحولها لتحسينات حقيقية.' },
  { name: 'طارق سامح', locale: 'ar', role: 'صاحب متجر', text: 'الموقع بقى أسهل في التصفح والعميل بيوصل للمعلومة بسرعة.' },
  { name: 'جنى أحمد', locale: 'ar', role: 'صانعة محتوى', text: 'الهوية ظهرت بشكل جميل جداً والموقع بقى مناسب للمحتوى بتاعي.' },
  { name: 'مروان عادل', locale: 'ar', role: 'مدير عمليات', text: 'نظم لنا خطوات الشغل وخلى النظام أسهل للفريق كله.' },
  { name: 'سلمى وائل', locale: 'ar', role: 'صاحبة كورس', text: 'صفحة الكورس بقت واضحة ومقنعة وسهلت على الناس التسجيل.' },
  { name: 'علي فؤاد', locale: 'ar', role: 'رائد أعمال', text: 'من أحسن المطورين اللي اتعاملت معاهم، ملتزم وبيفهم المطلوب.' },
  { name: 'فرح هشام', locale: 'ar', role: 'مصممة', text: 'أضاف لمسات ذكية خلت التجربة أبسط وأجمل في نفس الوقت.' },
  { name: 'رامي وليد', locale: 'ar', role: 'صاحب شركة', text: 'النتيجة عملية وسريعة وشكلها احترافي على كل الشاشات.' },
  { name: 'آية شريف', locale: 'ar', role: 'مدربة', text: 'كان صبور جداً مع التعديلات والنتيجة النهائية مرضية جداً.' },
  { name: 'شريف نبيل', locale: 'ar', role: 'مؤسس ستارت أب', text: 'أدهم ساعدنا نحول الفكرة لمنتج حقيقي جاهز للعرض على العملاء.' },
];

const Reviews = ({ language, translations }) => {
  const t = translations[language];

  return (
    <section id="reviews" className={`reviews ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.reviewsTag}</span>
          <h2 className="section-title">{t.reviewsTitle}</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">{t.reviewsSubtitle}</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`} dir={review.locale === 'ar' ? 'rtl' : 'ltr'}>
              <div className="review-topline">
                <div className="review-avatar">{review.name.charAt(0)}</div>
                <div><h3>{review.name}</h3><span>{review.role}</span></div>
              </div>
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="section-number">06</div>
    </section>
  );
};

export default Reviews;
