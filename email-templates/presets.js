/* Stage presets for the EmailJS master template. Pass these params with emailjs.send. */
var BRIXX_MAIL = {
  base: "https://brixx-portal.vercel.app",
  stages: {
    application_received: {
      subject: "The Brixx — we got your audition",
      kicker: "APPLICATION RECEIVED",
      headline: "WE GOT YOUR AUDITION.",
      id_label: "YOUR APPLICATION ID",
      body: function(name, appid){ return "Hi "+name+", thank you for applying to The Brixx Production. Your application "+appid+" is in, and your monologue video is with us. Leadership reviews monologues every week. If you are shortlisted, your preliminary quiz unlocks on your status page and we will write to you here. Keep your phone close."; },
      cta_text: "Track my application", cta_url: this.base+"#/status"
    },
    shortlisted: {
      subject: "The Brixx — you are shortlisted",
      kicker: "NEXT STAGE UNLOCKED",
      headline: "YOU ARE SHORTLISTED.",
      id_label: "YOUR APPLICATION ID",
      body: function(name, appid){ return "Hi "+name+", good news. Your monologue stood out, and leadership has unlocked your preliminary quiz on your status page. You have ten minutes once you start, so read the Brixx manual on the same page first. Take a breath, then go and show us."; },
      cta_text: "Open my status page", cta_url: this.base+"#/status"
    },
    selected: {
      subject: "The Brixx — welcome to the team",
      kicker: "SELECTION DECISION",
      headline: "WELCOME TO THE BRIXX.",
      id_label: "YOUR APPLICATION ID",
      body: function(name, appid){ return "Hi "+name+", you made it. Leadership has selected you to join The Brixx Production. Your acceptance fee confirms your place: pay by bank transfer to the account on your status page, then register your member profile. We cannot wait to see what you bring to the stage."; },
      cta_text: "Complete my acceptance", cta_url: this.base+"#/status"
    },
    not_selected: {
      subject: "The Brixx — this cycle's decision",
      kicker: "SELECTION DECISION",
      headline: "NOT THIS CYCLE. DOOR'S OPEN.",
      id_label: "YOUR APPLICATION ID",
      body: function(name){ return "Hi "+name+", thank you for auditioning with us. This time we are not moving your application forward, but that is a no for this cycle, not for you. Doors open again soon, and we would love to see you try again. Keep acting."; },
      cta_text: "Visit the portal", cta_url: this.base
    },
    member_number: {
      subject: "The Brixx — your member number",
      kicker: "MEMBER ID ISSUED",
      headline: "YOUR BRIXX NUMBER IS READY.",
      id_label: "YOUR BRIXX NUMBER",
      body: function(name){ return "Hi "+name+", welcome to the register. This is your permanent member number. Guard it: you will use it every time you sign in to the portal."; },
      cta_text: "Open my dashboard", cta_url: this.base+"#/join"
    },
    claim_received: {
      subject: "The Brixx — your claim is in",
      kicker: "CLAIM RECEIVED",
      headline: "WE REMEMBER YOU.",
      id_label: "YOUR CLAIM",
      body: function(name){ return "Hi "+name+", your claim is in. Leadership will verify you against our records and issue your Brixx number. Watch out for a message on the WhatsApp number you gave."; },
      cta_text: "Visit the portal", cta_url: this.base
    }
  }
};
