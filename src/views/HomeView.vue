<template>
  <AppTemplate>
    <div id="app">
      <div class="main-wrapper main-wrapper-1">
        <MensagensHome :msg="msg" v-show="msg" :msgType="msgType" />
        <Navbar />
        <div class="main-content">
          <div class="section">
            <div class="section-body">
              <div class="row mt-sm-4">
                <div class="col-12 col-md-12 col-lg-8">
                  <div class="card">
                    <div class="padding-20">
                      <ul class="nav nav-tabs" id="myTab2" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="home-tab2" data-toggle="tab" href="#about" role="tab"
                            aria-selected="true">Criar</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="profile-tab2" data-toggle="tab" href="#settings" role="tab"
                            aria-selected="false">Editar</a>
                        </li>
                      </ul>
                      <div class="tab-content tab-bordered" id="myTab3Content">
                        <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab2">
                          <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">

                                <div class="card-header">
                                  <h4>Categoria</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <label>Escolha uma Categoria</label>
                                    <select class="form-control" v-model="selectForm" @change="handleCategoryChange"
                                      :disabled="disabledCategory" id="categorySelect">
                                      <option :value=0>Adicionar uma categoria</option>
                                      <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                                        {{ categoria.name }}</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome da Categoria</label>
                                    <input maxlength="35" class="form-control" id="CategoryName" type="text"
                                      v-model="categoryName" :disabled="isCategorySelected" />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" @click="submitCategory"
                                    :disabled="isCategorySelected" id="submitButtonCategories">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">

                                <div class="card-header">
                                  <h4>Cursos</h4>
                                </div>
                                <div class="card-body" id="cursoForm">
                                  <div class="form-group">
                                    <label>Escolha o Curso</label>
                                    <select class="form-control cursoFormSelect inputCourse" v-model="selectedCourse"
                                      id="cursoFormSelect" :disabled="!isCategorySelected">
                                      <option :value=0>adicionar um curso</option>
                                      <option v-for="curso in filteredCourses" :key="curso.id" :value="curso.id">
                                        {{ curso.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome do Curso</label>
                                    <input type="text" maxlength="35" class="form-control inputCourse" required
                                      v-model="nameCourse" :disabled="isCursoSelected" />
                                  </div>

                                  <div class="form-group">
                                    <label>Descrição do curso</label>
                                    <textarea class="form-control inputCourse" id="courseDescription"
                                      @input="updateCharCount('descriptionCourse')" v-model="descriptionCourse"
                                      maxlength="255" :disabled="isCursoSelected"></textarea>
                                    <p>{{ charCourse }}/{{ maxLengthCourse }}</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Autor do curso</label>
                                    <input type="text" maxlength="20" class="form-control inputCourse" required
                                      v-model="authorCourse" :disabled="isCursoSelected" />
                                  </div>
                                  <div class="form-group">
                                    <label>Imagem do Curso</label>
                                    <input type="file" class="form-control inputCourse" required
                                      @change="handleFileChange" :disabled="isCursoSelected" />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit" @click="submitButtonCourses"
                                    :disabled="isCursoSelected">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Aulas</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <label>Nome da Aula</label>
                                    <input type="text" maxlength="35" class="form-control inputLessons"
                                      v-model="nameLessons" :disabled="disabledLessons" required />
                                  </div>
                                  <div class="form-group">
                                    <label>Numero da Aula</label>
                                    <input type="number" class="form-control inputLessons" v-model="sequenceLessons"
                                      :disabled="disabledLessons" required />
                                  </div>
                                  <div class="form-group">
                                    <label>Descrição da Aula</label>
                                    <textarea class="form-control inputLessons" id="" name="informationLessons"
                                      maxlength="2000" @input="updateCharCount('informationLessons')"
                                      v-model="lessonsInformation" :disabled="disabledLessons" required></textarea>
                                    <p>{{ charLessons }}/{{ maxLengthLessons }}</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Video da Aula</label>
                                    <input type="file" class="form-control inputLessons" id="lessonsFile" required
                                      @change="fileLessonsChange" :disabled="disabledLessons" />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit" @click="submitButtonLessons"
                                    :disabled="disabledLessons">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="home-tab2">
                          <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Categoria</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <label>Escolha uma Categoria</label>
                                    <select class="form-control" v-model="selectFormEdit"
                                      @change="handleCategoryChangeEdit" :disabled="disabledSelectCategoryEdit"
                                      id="categorySelectEdit">
                                      <option :value=0>Editar uma categoria</option>
                                      <option v-for="categoriaEdit in categoriasEdit" :key="categoriaEdit.id"
                                        :value="categoriaEdit.id">
                                        {{ categoriaEdit.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome da Categoria</label>
                                    <input type="text" maxlength="35" class="form-control inputCategoryEdit"
                                      v-model="categoryNameEdit" :disabled="disabledCategoryEdit" id="CategoryNameEdit">
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit" @click="submitButtonCategoriesEdit"
                                    :disabled="disabledCategoryEdit">Submit</button>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Cursos</h4>
                                </div>
                                <div class="card-body" id="cursoForm">
                                  <div class="form-group">
                                    <label>Escolha o Curso</label>
                                    <select class="form-control" v-model="selectedCourseEdit"
                                      @change="handleCourseChangeEdit" :disabled="disabledSelectCourseEdit"
                                      id="selectedCourseEdit">
                                      <option :value=0>Editar um curso</option>
                                      <option v-for="courseEdit in filteredCoursesEdit" :key="courseEdit.id"
                                        :value="courseEdit.id">
                                        {{ courseEdit.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome do Curso</label>
                                    <input type="text" maxlength="35" class="form-control inputCourseEdit" required
                                      v-model="nameCourseEdit" :disabled="inputCourseEdit">
                                  </div>

                                  <div class="form-group">
                                    <label>Descrição do curso</label>
                                    <textarea class="form-control inputCourseEdit" v-model="descriptionCourseEdit"
                                      maxlength="255" @input="updateCharCount('descriptionCourseEdit')"
                                      :disabled="inputCourseEdit"></textarea>
                                    <p>{{ charCourseEdit }}/{{ maxLengthCourseEdit }}</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Autor do curso</label>
                                    <input type="text" maxlength="35" class="form-control inputCourseEdit"
                                      v-model="authorCourseEdit" :disabled="inputCourseEdit">
                                  </div>
                                  <div class="form-group">
                                    <label>Imagem do Curso</label>
                                    <input type="file" name="imageCourse" class="form-control inputCourse" required
                                      disabled />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit" @click="submitButtonCoursesEdit"
                                    :disabled="inputCourseEdit">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Aulas</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <label>Escolha uma Aula</label>
                                    <select class="form-control" id="lessonFormSelectEdit"
                                      v-model="lessonFormSelectEdit" @change="handlLessonsChangeEdit"
                                      :disabled="lessonsEditSelect">
                                      <option :value=0>Editar uma aula</option>
                                      <option v-for="lessonEdit in filteredLessonsEdit" :key="lessonEdit.id"
                                        :value="lessonEdit.id">
                                        {{ lessonEdit.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome da Aula</label>
                                    <input type="text" maxlength="35" class="form-control inputLessonsEdit"
                                      v-model="nameLessonsEdit" :disabled="disabledLessonsEdit">
                                  </div>
                                  <div class="form-group">
                                    <label>Numero da Aula</label>
                                    <input type="number" class="form-control inputLessonsEdit"
                                      v-model="sequenceLessonsEdit" :disabled="disabledLessonsEdit">
                                  </div>
                                  <div class="form-group">
                                    <label>Descrição da Aula</label>
                                    <textarea class="form-control inputLessonsEdit" id="lessonsInformationEdit"
                                      maxlength="2000" @input="updateCharCount('informationLessonsEdit')"
                                      v-model="informationLessonsEdit" :disabled="disabledLessonsEdit"></textarea>
                                    <p>{{ charLessonsEdit }}/{{ maxLengthLessonsEdit }}</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Video da Aula</label>
                                    <input type="file" class="form-control inputLessonsEdit" disabled
                                      :disabled="disabledLessonsEdit">
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit" @click="submitButtonLessonsEdit"
                                    :disabled="disabledLessonsEdit">Submit</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppTemplate>
</template>

<script>
import MensagensHome from "@/components/MensagensHome.vue";
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import AppTemplate from "./templates/AppTemplate.vue";

export default {
  name: "Home",
  props: [],
  components: {
    MensagensHome,
    AppTemplate,
    Navbar,
    name: "MyComponent",
  },
  data() {
    return {
      categorias: [],
      categoriasEdit: [],
      cursosEdit: [],
      selectForm: 0,
      cursos: [],
      selectedCourse: 0,
      nameCourse: null,
      descriptionCourse: null,
      authorCourse: null,
      imageCourse: null,
      categoryName: '',
      isActive: true,
      submitting: false,
      msg: null,
      msgType: '',
      success: false,
      lessonsInformation: null,
      nameLessons: null,
      sequenceLessons: null,
      categoryNameEdit: null,
      nameCourseEdit: null,
      descriptionCourseEdit: null,
      authorCourseEdit: null,
      informationLessonsEdit: null,
      sequenceLessonsEdit: null,
      nameLessonsEdit: null,
      selectFormEdit: 0,
      selectedCourseEdit: 0,
      lessonFormSelectEdit: 0,
      courseDescription: '',
      charCourse: 0,
      maxLengthCourse: 255,
      lessonsInformation: '',
      charLessons: 0,
      maxLengthLessons: 2000,
      courseDescriptionEdit: '',
      charCourseEdit: 0,
      maxLengthCourseEdit: 255,
      lessonsInformationEdit: '',
      charLessonsEdit: 0,
      maxLengthLessonsEdit: 2000
    };
  },
  computed: {
    isCategorySelected() {
      return this.selectForm !== 0;
    },
    disabledCategory() {
      return this.selectedCourse !== 0
    },
    isCursoSelected() {
      if (this.selectForm !== 0 && this.selectedCourse === 0) {
        return false;
      } else {
        return true
      }
    },
    disabledLessons() {
      if (this.selectedCourse !== 0 && this.selectForm !== 0) {
        return false;
      } else {
        return true
      }
    },
    disabledSelectCategoryEdit() {
      return this.selectedCourseEdit !== 0
    },
    disabledSelectCourseEdit() {
      if (this.selectFormEdit !== 0 && this.lessonFormSelectEdit === 0) {
        return false;
      } else {
        return true
      }

    },
    disabledCategoryEdit() {
      if (this.selectFormEdit !== 0 && this.selectedCourseEdit === 0) {
        return false
      } else {
        return true
      }
    },
    inputCourseEdit() {
      if (this.selectFormEdit !== 0 && this.selectedCourseEdit !== 0 && this.lessonFormSelectEdit === 0) {
        return false
      } else {
        return true
      }
    },
    lessonsEditSelect() {
      if (this.selectFormEdit !== 0 && this.selectedCourseEdit !== 0) {
        return false
      } else {
        return true
      }
    },
    disabledLessonsEdit() {
      if (this.lessonFormSelectEdit !== 0 && this.selectedCourseEdit !== 0) {
        return false
      } else {
        return true
      }
    },
    filteredCourses() {
      if (!this.selectForm) return [];
      return this.cursos.filter(curso => curso.category_id == this.selectForm);
    },
    filteredCoursesEdit() {
      if (!this.selectFormEdit) return [];
      return this.cursosEdit.filter(cursoEdit => cursoEdit.category_id == this.selectFormEdit);
    },
    filteredLessonsEdit() {
      if (!this.selectedCourseEdit) return [];
      return this.lessonsEdit.filter(lessonEdit => lessonEdit.course_id == this.selectedCourseEdit);
    }
  },
  mounted() {
    this.buscarCursos();
    this.buscarCategorias();
    this.buscarCategoriasEdit();
    this.buscarCursosEdit();
    this.buscarLessonsEdit();
    this.checkUserStatus();
  },
  watch: {
    descriptionCourse(newVal) {
      this.charCourse = newVal.length;
    },
    lessonsInformation(newVal) {
      this.charLessons = newVal.length;
    },
    descriptionCourseEdit(newVal) {
      this.charCourseEdit = newVal.length;
    },
    informationLessonsEdit(newVal) {
      this.charLessonsEdit = newVal.length;
    }
  },
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    checkUserStatus() {
      const token = this.getCookie('token');
      if (token) {
        axios.get(`${apiUrl}/user`, {
          headers: {
            'Authorization': 'Bearer ' + token
          },
          withCredentials: true
        })

          .then(response => {
            if (!response.data) {
              this.$router.push({ name: 'Login' });
              this.deleteTokenCookie()
            } else if (response.data.active === 0) {
              this.$router.push({ name: 'Login' });
              this.deleteTokenCookie()
            }
          })
          .catch(error => {
            console.error('Erro ao verificar o status do usuário:', error);
            this.$router.push({ name: 'Login' });
          });
      } else {
        this.$router.push({ name: 'Login' });
        this.deleteTokenCookie()

      }
    },
    updateCharCount(field) {
      if (field === 'descriptionCourse') {
        if (this.descriptionCourse.length > this.maxLengthCourse) {
          this.descriptionCourse = this.descriptionCourse.substring(0, this.maxLengthCourse);
        }
      } else if (field === 'lessonsInformation') {
        if (this.lessonsInformation.length > this.maxLengthLessons) {
          this.lessonsInformation = this.lessonsInformation.substring(0, this.maxLengthLessons);
        }
      } else if (field === 'descriptionCourseEdit') {
        if (this.descriptionCourseEdit.length > this.maxLengthCourseEdit) {
          this.descriptionCourseEdit = this.descriptionCourseEdit.substring(0, this.maxLengthCourseEdit);
        }
      } else if (field === 'informationLessonsEdit') {
        if (this.informationLessonsEdit.length > this.maxLengthLessonsEdit) {
          this.informationLessonsEdit = this.informationLessonsEdit.substring(0, this.maxLengthLessonsEdit);
        }
      }
    },
    async submitCategory() {
      try {
        document.getElementById('CategoryName').disabled = true
        document.getElementById('categorySelect').disabled = true
        const token = this.getCookie('token');
        const data = {
          name: this.categoryName,
          active: 1,
        };
        const response = await axios.post(`${apiUrl}/categories`, data, {
          headers: { 'Authorization': 'Bearer ' + token }
        });
        if (response.data.errors) {

          this.msgType = 'danger';
          this.msg = '';
          for (const [field, messages] of Object.entries(response.data.errors)) {

            this.msg += `${field}: ${messages.join(', ')}\n`;
          }
          document.getElementById('CategoryName').disabled = false
          document.getElementById('categorySelect').disabled = false
          setTimeout(() => {
            this.msg = '';
          }, 5000);
        }
        else {
          window.location.reload(true)
        }
      } catch (error) {
        console.error('Erro ao enviar POST:', error);
      } finally {
        document.getElementById('CategoryName').disabled = false
        document.getElementById('categorySelect').disabled = false
      }
    },
    handleFileChange(event) {
      this.imageCourse = event.target.files[0];
    },
    async submitButtonCourses() {
      const token = this.getCookie('token');
      try {
        document.getElementById('categorySelect').disabled = true
        const inputsCourse = document.querySelectorAll('.inputCourse');
        inputsCourse.forEach(inputCourses => {
          inputCourses.disabled = true;
        });
        const formData = new FormData();
        formData.append('category_id', this.selectForm);
        formData.append('name', this.nameCourse);
        formData.append('description', this.descriptionCourse);
        formData.append('author', this.authorCourse);
        formData.append('image', this.imageCourse);

        const response = await axios.post(`${apiUrl}/courses`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
          }
        });
        if (response.data.errors) {
          this.msgType = 'danger';
          this.msg = '';
          for (const [field, messages] of Object.entries(response.data.errors)) {

            this.msg += `${field}: ${messages.join(', ')}\n`;
          }
          document.getElementById('categorySelect').disabled = false
          inputsCourse.forEach(inputCourses => {
            inputCourses.disabled = false;
          });
          setTimeout(() => {
            this.msg = '';
          }, 5000);
        }
        else {
          window.location.reload(true)
        }
      } catch (error) {
        console.error('Erro ao criar curso:', error);
        // Lógica para lidar com o erro
      } finally {
        document.getElementById('categorySelect').disabled = false
        const inputsCourse = document.querySelectorAll('.inputCourse');
        inputsCourse.forEach(inputCourses => {
          inputCourses.disabled = false;
        });
      }
    },

    fileLessonsChange(event) {
      this.fileLessons = event.target.files[0]; // Capture o arquivo selecionado
    },
    async submitButtonLessons() {
      const token = this.getCookie('token');

      try {
        document.getElementById('cursoFormSelect').disabled = true
        const inputsLessons = document.querySelectorAll('.inputLessons')
        inputsLessons.forEach(inputLessons => {
          inputLessons.disabled = true;
        });
        const formData = new FormData();
        formData.append('course_id', this.selectedCourse);
        formData.append('name', this.nameLessons);
        formData.append('information', this.lessonsInformation);
        formData.append('sequence', this.sequenceLessons);
        formData.append('video', this.fileLessons);

        const response = await axios.post(`${apiUrl}/lessons`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
          }
        });
        if (response.data.errors) {
          this.msgType = 'danger';
          this.msg = '';
          for (const [field, messages] of Object.entries(response.data.errors)) {

            this.msg += `${field}: ${messages.join(', ')}\n`;
          }
          setTimeout(() => {
            this.msg = '';
          }, 5000);
          document.getElementById('cursoFormSelect').disabled = false
          inputsLessons.forEach(input => {
            input.disabled = false;
          });
        }
        else {
          // window.location.reload(true)
          if (response.data.success) {
            this.nameLessons = ''
            this.lessonsInformation = ''
            this.sequenceLessons = ''
            const fileInput = document.getElementById('lessonsFile');
            fileInput.type = 'text';
            fileInput.type = 'file';
            this.msgType = 'success';
            this.msg = response.data.success

            setTimeout(() => {
              this.msg = '';
              this.msgType = '';
            }, 5000)
          };
        }
      } catch (error) {
        console.error('Erro ao criar aula:', error);
      } finally {
        document.getElementById('cursoFormSelect').disabled = false
        const inputsLessons = document.querySelectorAll('.inputLessons')
        inputsLessons.forEach(inputLessons => {
          inputLessons.disabled = false;
        });

      }
    },
    async submitButtonCategoriesEdit() {
      try {
        document.getElementById('categorySelectEdit').disabled = true
        document.getElementById('CategoryNameEdit').disabled = true
        const token = this.getCookie('token');
        const data = {
          name: this.categoryNameEdit,
        };
        const id = this.selectFormEdit
        const response = await axios.put(`${apiUrl}/categories/${id}`, data, {
          headers: { 'Authorization': 'Bearer ' + token }
        });
        if (response.data.errors) {
          this.msgType = 'danger'; 
          this.msg = '';
          for (const [field, messages] of Object.entries(response.data.errors)) {

            this.msg += `${field}: ${messages.join(', ')}\n`;
          }
          document.getElementById('categorySelectEdit').disabled = false
          document.getElementById('CategoryNameEdit').disabled = false
          setTimeout(() => {
            this.msg = '';
          }, 5000);
        }
        else {
          window.location.reload(true)
        }
      } catch (error) {
        console.error('Erro ao enviar PUT:', error);
      } finally {
        document.getElementById('categorySelectEdit').disabled = false
        document.getElementById('CategoryNameEdit').disabled = false
      }
    },
    async submitButtonCoursesEdit() {
      const token = this.getCookie('token');
      try {
        document.getElementById('selectedCourseEdit').disabled = true
        const inputCourseEdit = document.querySelectorAll('.inputCourseEdit')
        inputCourseEdit.forEach(inputCourseEdit => {
          inputCourseEdit.disabled = true;
        });

        const idCourse = this.selectedCourseEdit;
        const data = {
          name: this.nameCourseEdit,
          description: this.descriptionCourseEdit,
          author: this.authorCourseEdit
        };

        const response = await axios.put(`${apiUrl}/courses/${idCourse}`, data, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });
        if (response.data.errors) {
          this.msgType = 'danger';
          this.msg = '';
          for (const [field, messages] of Object.entries(response.data.errors)) {

            this.msg += `${field}: ${messages.join(', ')}\n`;
          }
          document.getElementById('selectedCourseEdit').disabled = false
          inputCourseEdit.forEach(inputCourseEdit => {
            inputCourseEdit.disabled = false;
          });

          setTimeout(() => {
            this.msg = '';
          }, 5000);
        }
        else {
          window.location.reload(true)
        }
      } catch (error) {
        console.error('Erro ao criar curso:', error);
      } finally {
        document.getElementById('selectedCourseEdit').disabled = false
        const inputCourseEdit = document.querySelectorAll('.inputCourseEdit')
        inputCourseEdit.forEach(inputCourseEdit => {
          inputCourseEdit.disabled = false;
        });
      }
    },
    async submitButtonLessonsEdit() {
      const token = this.getCookie('token');
      try {
        document.getElementById('lessonFormSelectEdit').disabled = true
        const inputLessonsEdit = document.querySelectorAll('.inputLessonsEdit')
        inputLessonsEdit.forEach(inputLessonsEdit => {
          inputLessonsEdit.disabled = true;
        });

        const idLessons = this.lessonFormSelectEdit;
        const data = {
          name: this.nameLessonsEdit,
          information: this.informationLessonsEdit,
          sequence: this.sequenceLessonsEdit,
        };

        const response = await axios.put(`${apiUrl}/lessons/${idLessons}`, data, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });
        if (response.data.errors) {
          this.msgType = 'danger';
          this.msg = '';
          for (const [field, messages] of Object.entries(response.data.errors)) {

            this.msg += `${field}: ${messages.join(', ')}\n`;
          }
          document.getElementById('lessonFormSelectEdit').disabled = false
          inputLessonsEdit.forEach(inputLessonsEdit => {
            inputLessonsEdit.disabled = false;
          });
          setTimeout(() => {
            this.msg = '';
          }, 5000);
        }
        else {
          window.location.reload(true)
        }
      } catch (error) {
        console.error('Erro ao criar curso:', error);
      } finally {
        document.getElementById('lessonFormSelectEdit').disabled = true
        const inputLessonsEdit = document.querySelectorAll('.inputLessonsEdit')
        inputLessonsEdit.forEach(inputLessonsEdit => {
          inputLessonsEdit.disabled = false;
        });
      }
    },
    async buscarCategorias() {
      const token = this.getCookie('token');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      try {
        const resposta = await axios.get(`${apiUrl}/categories`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        this.categorias = resposta.data;
      } catch (erro) {
        console.error('Houve um erro ao buscar as categorias:', erro);
      }
    },
    async buscarCursos() {
      const token = this.getCookie('token'); // Nome do cookie que contém o token
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      try {
        const resposta = await axios.get(`${apiUrl}/courses`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (Array.isArray(resposta.data.courses)) {
          // console.log(resposta.data.courses)
          this.cursos = resposta.data.courses;
        } else {
          console.error('Resposta de cursos não é um array:', resposta);
        }
      } catch (erro) {
        console.error('Houve um erro ao buscar os cursos:', erro);
      }
    },
    handleCourseChange() {
    },
    async buscarCategoriasEdit() {
      const token = this.getCookie('token'); // Nome do cookie que contém o token
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      try {
        const resposta = await axios.get(`${apiUrl}/categories`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        this.categoriasEdit = resposta.data
      } catch (erro) {
        console.error('Houve um erro ao buscar as categorias:', erro);
      }
    },
    async buscarCursosEdit() {
      const token = this.getCookie('token'); // Nome do cookie que contém o token
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      try {
        const resposta = await axios.get(`${apiUrl}/courses`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (Array.isArray(resposta.data.courses)) {
          // console.log(resposta.data.courses)
          this.cursosEdit = resposta.data.courses;
        } else {
          console.error('Resposta de cursos não é um array:', resposta);
        }
      } catch (erro) {
        console.error('Houve um erro ao buscar os cursos:', erro);
      }
    },
    handleCourseChangeEdit() {
      const selectedCourseEdit = this.cursosEdit.find(courseEdit => courseEdit.id === this.selectedCourseEdit);
      if (selectedCourseEdit) {
        this.nameCourseEdit = selectedCourseEdit.name;
        this.descriptionCourseEdit = selectedCourseEdit.description;
        this.authorCourseEdit = selectedCourseEdit.author;
      }
    },
    async buscarLessonsEdit() {
      const token = this.getCookie('token'); // Nome do cookie que contém o token
      if (!token) {
        console.error('Token não encontrado');
        return;
      }
      try {
        const resposta = await axios.get(`${apiUrl}/lessons`, {

          headers: { 'Authorization': `Bearer ${token}` }
        });

        this.lessonsEdit = resposta.data.lessons;
      } catch (erro) {
        console.error('Houve um erro ao buscar os cursos:', erro);
      }
    },
    handlLessonsChangeEdit() {
      const lessonFormSelectEdit = this.lessonsEdit.find(lessonEdit => lessonEdit.id === this.lessonFormSelectEdit);
      if (lessonFormSelectEdit) {
        this.nameLessonsEdit = lessonFormSelectEdit.name;
        this.sequenceLessonsEdit = lessonFormSelectEdit.sequence;
        this.informationLessonsEdit = lessonFormSelectEdit.information;
      }
    },

  }
}


</script>
<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
</style>