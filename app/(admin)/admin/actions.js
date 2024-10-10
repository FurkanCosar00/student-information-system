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