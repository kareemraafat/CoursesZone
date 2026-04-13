export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // ============ COURSES API ============
    if (url.pathname === '/api/courses' && request.method === 'GET') {
      const data = await env.COURSES_KV.get('courses', 'json') || [];
      return new Response(JSON.stringify(data), { headers: corsHeaders });
    }
    if (url.pathname === '/api/courses' && request.method === 'POST') {
      const newItem = await request.json();
      let items = await env.COURSES_KV.get('courses', 'json') || [];
      const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
      newItem.id = newId;
      items.push(newItem);
      await env.COURSES_KV.put('courses', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/courses/') && request.method === 'PUT') {
      const id = parseInt(url.pathname.split('/').pop());
      const updatedItem = await request.json();
      let items = await env.COURSES_KV.get('courses', 'json') || [];
      const index = items.findIndex(i => i.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem, id: id };
        await env.COURSES_KV.put('courses', JSON.stringify(items));
      }
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/courses/') && request.method === 'DELETE') {
      const id = parseInt(url.pathname.split('/').pop());
      let items = await env.COURSES_KV.get('courses', 'json') || [];
      items = items.filter(i => i.id !== id);
      await env.COURSES_KV.put('courses', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }

    // ============ INSTRUCTORS API ============
    if (url.pathname === '/api/instructors' && request.method === 'GET') {
      const data = await env.COURSES_KV.get('instructors', 'json') || [];
      return new Response(JSON.stringify(data), { headers: corsHeaders });
    }
    if (url.pathname === '/api/instructors' && request.method === 'POST') {
      const newItem = await request.json();
      let items = await env.COURSES_KV.get('instructors', 'json') || [];
      const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
      newItem.id = newId;
      items.push(newItem);
      await env.COURSES_KV.put('instructors', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/instructors/') && request.method === 'PUT') {
      const id = parseInt(url.pathname.split('/').pop());
      const updatedItem = await request.json();
      let items = await env.COURSES_KV.get('instructors', 'json') || [];
      const index = items.findIndex(i => i.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem, id: id };
        await env.COURSES_KV.put('instructors', JSON.stringify(items));
      }
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/instructors/') && request.method === 'DELETE') {
      const id = parseInt(url.pathname.split('/').pop());
      let items = await env.COURSES_KV.get('instructors', 'json') || [];
      items = items.filter(i => i.id !== id);
      await env.COURSES_KV.put('instructors', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }

    // ============ TESTIMONIALS API ============
    if (url.pathname === '/api/testimonials' && request.method === 'GET') {
      const data = await env.COURSES_KV.get('testimonials', 'json') || [];
      return new Response(JSON.stringify(data), { headers: corsHeaders });
    }
    if (url.pathname === '/api/testimonials' && request.method === 'POST') {
      const newItem = await request.json();
      let items = await env.COURSES_KV.get('testimonials', 'json') || [];
      const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
      newItem.id = newId;
      items.push(newItem);
      await env.COURSES_KV.put('testimonials', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/testimonials/') && request.method === 'PUT') {
      const id = parseInt(url.pathname.split('/').pop());
      const updatedItem = await request.json();
      let items = await env.COURSES_KV.get('testimonials', 'json') || [];
      const index = items.findIndex(i => i.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem, id: id };
        await env.COURSES_KV.put('testimonials', JSON.stringify(items));
      }
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/testimonials/') && request.method === 'DELETE') {
      const id = parseInt(url.pathname.split('/').pop());
      let items = await env.COURSES_KV.get('testimonials', 'json') || [];
      items = items.filter(i => i.id !== id);
      await env.COURSES_KV.put('testimonials', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }

    // ============ BRANCHES API ============
    if (url.pathname === '/api/branches' && request.method === 'GET') {
      const data = await env.COURSES_KV.get('branches', 'json') || [];
      return new Response(JSON.stringify(data), { headers: corsHeaders });
    }
    if (url.pathname === '/api/branches' && request.method === 'POST') {
      const newItem = await request.json();
      let items = await env.COURSES_KV.get('branches', 'json') || [];
      const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
      newItem.id = newId;
      items.push(newItem);
      await env.COURSES_KV.put('branches', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/branches/') && request.method === 'PUT') {
      const id = parseInt(url.pathname.split('/').pop());
      const updatedItem = await request.json();
      let items = await env.COURSES_KV.get('branches', 'json') || [];
      const index = items.findIndex(i => i.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem, id: id };
        await env.COURSES_KV.put('branches', JSON.stringify(items));
      }
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }
    if (url.pathname.startsWith('/api/branches/') && request.method === 'DELETE') {
      const id = parseInt(url.pathname.split('/').pop());
      let items = await env.COURSES_KV.get('branches', 'json') || [];
      items = items.filter(i => i.id !== id);
      await env.COURSES_KV.put('branches', JSON.stringify(items));
      return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
    }

    // ============ CLEAR ALL DATA ============
    if (url.pathname === '/clear' && request.method === 'DELETE') {
      await env.COURSES_KV.put('courses', JSON.stringify([]));
      await env.COURSES_KV.put('instructors', JSON.stringify([]));
      await env.COURSES_KV.put('testimonials', JSON.stringify([]));
      await env.COURSES_KV.put('branches', JSON.stringify([]));
      return new Response(JSON.stringify({ success: true, message: 'All data cleared' }));
    }

    // ============ HTML ADMIN PANEL ============
    if (url.pathname === '/') {
      const html = `<!DOCTYPE html>
<html>
<head>
  <title>Complete Admin Panel</title>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial; max-width: 1200px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
    .tabs { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
    .tab { padding: 10px 20px; background: #ddd; cursor: pointer; border-radius: 5px; }
    .tab.active { background: #2563eb; color: white; }
    .tab-content { display: none; background: white; padding: 20px; border-radius: 10px; }
    .tab-content.active { display: block; }
    input, textarea, select { width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ddd; border-radius: 5px; }
    button { padding: 10px 20px; margin: 5px; border: none; cursor: pointer; border-radius: 5px; }
    .add-btn { background: #2563eb; color: white; }
    .edit-btn { background: #f59e0b; color: white; }
    .delete-btn { background: #dc2626; color: white; }
    .cancel-btn { background: #6b7280; color: white; }
    .clear-btn { background: #dc2626; color: white; margin-bottom: 20px; }
    .item-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; }
    .item-info { flex: 1; }
    .actions { display: flex; gap: 10px; }
  </style>
</head>
<body>
  <h1>📚 Complete Admin Panel</h1>
  
  <div class="tabs">
    <div class="tab active" onclick="showTab('courses')">📖 Courses</div>
    <div class="tab" onclick="showTab('instructors')">👨‍🏫 Instructors</div>
    <div class="tab" onclick="showTab('testimonials')">⭐ Testimonials</div>
    <div class="tab" onclick="showTab('branches')">📍 Branches</div>
  </div>
  
  <button class="clear-btn" onclick="clearAll()">🗑️ Clear All Data</button>
  
  <!-- Courses Tab -->
  <div id="courses-tab" class="tab-content active">
    <h2>Add Course</h2>
    <input type="hidden" id="courseId">
    <input type="text" id="course_title_en" placeholder="Title (English)">
    <input type="text" id="course_title_ar" placeholder="Title (Arabic)">
    <textarea id="course_description_en" placeholder="Description (English)" rows="2"></textarea>
    <textarea id="course_description_ar" placeholder="Description (Arabic)" rows="2"></textarea>
    <input type="number" id="course_price" placeholder="Price">
    <select id="course_level_en"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
    <select id="course_level_ar"><option>مبتدئ</option><option>متوسط</option><option>متقدم</option></select>
    <input type="number" id="course_weeks" placeholder="Weeks">
    <input type="text" id="course_image" placeholder="Image URL">
    <button id="courseSubmitBtn" class="add-btn">Add Course</button>
    <button id="courseCancelBtn" class="cancel-btn" style="display:none;">Cancel</button>
    <h2>Courses List</h2>
    <div id="coursesList"></div>
  </div>
  
  <!-- Instructors Tab -->
  <div id="instructors-tab" class="tab-content">
    <h2>Add Instructor</h2>
    <input type="hidden" id="instructorId">
    <input type="text" id="instructor_name_en" placeholder="Name (English)">
    <input type="text" id="instructor_name_ar" placeholder="Name (Arabic)">
    <input type="text" id="instructor_title_en" placeholder="Title (English)">
    <input type="text" id="instructor_title_ar" placeholder="Title (Arabic)">
    <textarea id="instructor_bio_en" placeholder="Bio (English)" rows="2"></textarea>
    <textarea id="instructor_bio_ar" placeholder="Bio (Arabic)" rows="2"></textarea>
    <input type="text" id="instructor_image" placeholder="Image URL">
    <button id="instructorSubmitBtn" class="add-btn">Add Instructor</button>
    <button id="instructorCancelBtn" class="cancel-btn" style="display:none;">Cancel</button>
    <h2>Instructors List</h2>
    <div id="instructorsList"></div>
  </div>
  
  <!-- Testimonials Tab -->
  <div id="testimonials-tab" class="tab-content">
    <h2>Add Testimonial</h2>
    <input type="hidden" id="testimonialId">
    <input type="text" id="testimonial_name_en" placeholder="Name (English)">
    <input type="text" id="testimonial_name_ar" placeholder="Name (Arabic)">
    <input type="text" id="testimonial_title_en" placeholder="Title (English)">
    <input type="text" id="testimonial_title_ar" placeholder="Title (Arabic)">
    <textarea id="testimonial_text_en" placeholder="Testimonial (English)" rows="2"></textarea>
    <textarea id="testimonial_text_ar" placeholder="Testimonial (Arabic)" rows="2"></textarea>
    <input type="number" id="testimonial_rating" placeholder="Rating (1-5)" min="1" max="5">
    <input type="text" id="testimonial_image" placeholder="Image URL">
    <button id="testimonialSubmitBtn" class="add-btn">Add Testimonial</button>
    <button id="testimonialCancelBtn" class="cancel-btn" style="display:none;">Cancel</button>
    <h2>Testimonials List</h2>
    <div id="testimonialsList"></div>
  </div>
  
  <!-- Branches Tab -->
  <div id="branches-tab" class="tab-content">
    <h2>Add Branch</h2>
    <input type="hidden" id="branchId">
    <input type="text" id="branch_name_en" placeholder="Name (English)">
    <input type="text" id="branch_name_ar" placeholder="Name (Arabic)">
    <textarea id="branch_address_en" placeholder="Address (English)" rows="2"></textarea>
    <textarea id="branch_address_ar" placeholder="Address (Arabic)" rows="2"></textarea>
    <input type="text" id="branch_phone" placeholder="Phone">
    <input type="text" id="branch_whatsapp" placeholder="WhatsApp">
    <button id="branchSubmitBtn" class="add-btn">Add Branch</button>
    <button id="branchCancelBtn" class="cancel-btn" style="display:none;">Cancel</button>
    <h2>Branches List</h2>
    <div id="branchesList"></div>
  </div>

  <script>
    let currentTab = 'courses';
    
    function showTab(tab) {
      currentTab = tab;
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      document.getElementById(tab + '-tab').classList.add('active');
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      event.target.classList.add('active');
      loadData(tab);
    }
    
    async function loadData(type) {
      const res = await fetch('/api/' + type);
      const data = await res.json();
      const container = document.getElementById(type + 'List');
      if (data.length === 0) { container.innerHTML = '<p>No data</p>'; return; }
      
      let html = '';
      for (const item of data) {
        if (type === 'courses') html += '<div class="item-card"><div class="item-info"><strong>' + (item.title_en || '') + '</strong> - $' + (item.price || 0) + '</div><div class="actions"><button class="edit-btn" onclick="editItem(\'' + type + '\',' + item.id + ')">Edit</button><button class="delete-btn" onclick="deleteItem(\'' + type + '\',' + item.id + ')">Delete</button></div></div>';
        else if (type === 'instructors') html += '<div class="item-card"><div class="item-info"><strong>' + (item.name_en || '') + '</strong> - ' + (item.title_en || '') + '</div><div class="actions"><button class="edit-btn" onclick="editItem(\'' + type + '\',' + item.id + ')">Edit</button><button class="delete-btn" onclick="deleteItem(\'' + type + '\',' + item.id + ')">Delete</button></div></div>';
        else if (type === 'testimonials') html += '<div class="item-card"><div class="item-info"><strong>' + (item.name_en || '') + '</strong> - ⭐' + (item.rating || 0) + '</div><div class="actions"><button class="edit-btn" onclick="editItem(\'' + type + '\',' + item.id + ')">Edit</button><button class="delete-btn" onclick="deleteItem(\'' + type + '\',' + item.id + ')">Delete</button></div></div>';
        else if (type === 'branches') html += '<div class="item-card"><div class="item-info"><strong>' + (item.name_en || '') + '</strong> - ' + (item.phone || '') + '</div><div class="actions"><button class="edit-btn" onclick="editItem(\'' + type + '\',' + item.id + ')">Edit</button><button class="delete-btn" onclick="deleteItem(\'' + type + '\',' + item.id + ')">Delete</button></div></div>';
      }
      container.innerHTML = html;
    }
    
    async function deleteItem(type, id) {
      if (confirm('Delete?')) { await fetch('/api/' + type + '/' + id, { method: 'DELETE' }); loadData(type); }
    }
    
    async function editItem(type, id) {
      const res = await fetch('/api/' + type);
      const items = await res.json();
      const item = items.find(i => i.id === id);
      if (!item) return;
      
      if (type === 'courses') {
        document.getElementById('courseId').value = item.id;
        document.getElementById('course_title_en').value = item.title_en || '';
        document.getElementById('course_title_ar').value = item.title_ar || '';
        document.getElementById('course_description_en').value = item.description_en || '';
        document.getElementById('course_description_ar').value = item.description_ar || '';
        document.getElementById('course_price').value = item.price || 0;
        document.getElementById('course_level_en').value = item.level_en || 'Beginner';
        document.getElementById('course_level_ar').value = item.level_ar || 'مبتدئ';
        document.getElementById('course_weeks').value = item.weeks || 10;
        document.getElementById('course_image').value = item.image || '';
        document.getElementById('courseSubmitBtn').innerHTML = 'Update Course';
        document.getElementById('courseCancelBtn').style.display = 'inline-block';
      }
      // Similar for other types...
    }
    
    async function clearAll() {
      if (confirm('DELETE ALL DATA?')) { await fetch('/clear', { method: 'DELETE' }); loadData(currentTab); }
    }
    
    // Submit handlers
    document.getElementById('courseSubmitBtn').onclick = async () => {
      const id = document.getElementById('courseId').value;
      const data = { title_en: document.getElementById('course_title_en').value, title_ar: document.getElementById('course_title_ar').value, description_en: document.getElementById('course_description_en').value, description_ar: document.getElementById('course_description_ar').value, price: parseInt(document.getElementById('course_price').value), level_en: document.getElementById('course_level_en').value, level_ar: document.getElementById('course_level_ar').value, weeks: parseInt(document.getElementById('course_weeks').value), image: document.getElementById('course_image').value };
      await fetch('/api/courses' + (id ? '/' + id : ''), { method: id ? 'PUT' : 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
      document.getElementById('courseId').value = ''; document.getElementById('courseSubmitBtn').innerHTML = 'Add Course'; document.getElementById('courseCancelBtn').style.display = 'none';
      loadData('courses');
    };
    
    document.getElementById('instructorSubmitBtn').onclick = async () => {
      const data = { name_en: document.getElementById('instructor_name_en').value, name_ar: document.getElementById('instructor_name_ar').value, title_en: document.getElementById('instructor_title_en').value, title_ar: document.getElementById('instructor_title_ar').value, bio_en: document.getElementById('instructor_bio_en').value, bio_ar: document.getElementById('instructor_bio_ar').value, image: document.getElementById('instructor_image').value };
      await fetch('/api/instructors', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
      loadData('instructors');
    };
    
    document.getElementById('testimonialSubmitBtn').onclick = async () => {
      const data = { name_en: document.getElementById('testimonial_name_en').value, name_ar: document.getElementById('testimonial_name_ar').value, title_en: document.getElementById('testimonial_title_en').value, title_ar: document.getElementById('testimonial_title_ar').value, text_en: document.getElementById('testimonial_text_en').value, text_ar: document.getElementById('testimonial_text_ar').value, rating: parseInt(document.getElementById('testimonial_rating').value), image: document.getElementById('testimonial_image').value };
      await fetch('/api/testimonials', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
      loadData('testimonials');
    };
    
    document.getElementById('branchSubmitBtn').onclick = async () => {
      const data = { name_en: document.getElementById('branch_name_en').value, name_ar: document.getElementById('branch_name_ar').value, address_en: document.getElementById('branch_address_en').value, address_ar: document.getElementById('branch_address_ar').value, phone: document.getElementById('branch_phone').value, whatsapp: document.getElementById('branch_whatsapp').value };
      await fetch('/api/branches', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
      loadData('branches');
    };
    
    loadData('courses');
  </script>
</body>
</html>`;
      
      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
    }

    return new Response('Not found', { status: 404 });
  }
};
