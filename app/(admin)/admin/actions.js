export async function addExamGrade(formData) {
  const supabase = createClient();

  const studentId = formData.get("studentId");

  const { data, error } = await supabase
  .from('students')
  .update({
      firstMidterm: formData.get("firstMidterm"),
      secondMidterm: formData.get("secondMidterm"),
      finalExam: formData.get("finalExam")
  })
  .eq('id', studentId)
  .select()
}

export async function deleteStudent(formData) {
  const supabase = createClient();
  const studentId = formData.get("studentId");

  const { error } = await supabase
  .from('students')
  .delete()
  .eq('id', studentId)  
}

export async function addStudent(formData) {
  const supabase = createClient()
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    options: {
      data: {
        role: "student"
      }
    }
  }

  const { error: insertError } = await supabase
  .from('students')
  .insert([
      { 
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: "student"
      }
  ]);
}