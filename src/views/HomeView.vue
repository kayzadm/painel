<template>

  <AppTemplate>
    <div id="">
      <div class="main-wrapper main-wrapper-1">
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
                        <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="home-tab2">
                          <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Categoria</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <label>Escolha uma Categoria</label>
                                    <select class="form-control" id="selectForm">
                                      <option>Adicionar uma categoria</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome da Categoria</label>
                                    <input maxlength="35" type="text" class="form-control" id="CategoryName" />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" id="submitButtonCategories" type="submit">
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
                                    <select class="form-control" id="cursoFormSelect" disabled>
                                      <option>adicionar um curso</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome do Curso</label>
                                    <input type="text" maxlength="35" name="Edit" class="form-control inputCourse"
                                      required disabled />
                                  </div>

                                  <div class="form-group">
                                    <label>Descrição do curso</label>
                                    <textarea class="form-control inputCourse" id="courseDescription"
                                      name="descriptionCourse" required disabled></textarea>
                                    <p class="char-count" id="charCourse">0/255</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Autor do curso</label>
                                    <input type="text" maxlength="20" name="authorCourse"
                                      class="form-control inputCourse" required disabled />
                                  </div>
                                  <div class="form-group">
                                    <label>Imagem do Curso</label>
                                    <input type="file" name="imageCourse" class="form-control inputCourse" required
                                      disabled />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit" id="submitButtonCourses" disabled>
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
                                      name="nameLessons" disabled required />
                                  </div>
                                  <div class="form-group">
                                    <label>Numero da Aula</label>
                                    <input type="number" class="form-control inputLessons" name="sequenceLessons"
                                      disabled required />
                                  </div>
                                  <div class="form-group">
                                    <label>Descrição da Aula</label>
                                    <textarea class="form-control inputLessons" id="lessonsInformation"
                                      name="informationLessons" disabled required></textarea>
                                    <p class="char-count" id="charLessons">0/2000</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Video da Aula</label>
                                    <input type="file" class="form-control inputLessons" name="fileLessons" disabled
                                      required />
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" id="submitButtonLessons" type="submit" disabled>
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade show active" id="settings" role="tabpanel"
                          aria-labelledby="profile-tab2">
                          <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Categoria</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <label>Escolha uma Categoria</label>
                                    <select class="form-control" id="selectFormEdit">
                                      <option>Editar uma categoria</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome da Categoria</label>
                                    <input type="text" maxlength="35" class="form-control inputCategoryEdit"
                                      name="nameCategoryEdit" id="CategoryNameEdit" disabled>
                                  </div>
                                  <div class="form-group">
                                    <label class="d-block">Ativar Categoria</label>
                                    
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" id="defaultCheck3Edit" disabled>
                                      <label class="form-check-label" for="defaultCheck3Edit">
                                        Desativar
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" id="submitButtonCategoriesEdit" type="submit"
                                    disabled>Submit</button>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <div class="card">
                                <div class="card-header">
                                  <h4>Cursos</h4>
                                </div>
                                <div class="card-body" id="cursoFormEdit">
                                  <div class="form-group">

                                    <label>Escolha o Curso</label>
                                    <select class="form-control" id="cursoFormSelectEdit" disabled>
                                      <option>Editar um curso</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome do Curso</label>
                                    <input type="text" maxlength="35" name="nameCourseEdit"
                                      class="form-control inputCourseEdit" required disabled>
                                  </div>
                                  <div class="form-group">
                                    <label>Descrição do curso</label>
                                    <textarea class="form-control inputCourseEdit" id="courseDescriptionEdit"
                                      name="descriptionCourseEdit" required disabled></textarea>
                                    <p class="char-count" id="charCourseEdit">0/255</p>
                                  </div>
                                  <div class="form-group">
                                    <label>Autor do curso</label>
                                    <input type="text" maxlength="35" name="authorCourseEdit"
                                      class="form-control inputCourseEdit" required disabled>
                                  </div>
                                  <!-- <div class="form-group">
                                    <label>Imagem do Curso</label>
                                    <input type="file" name="imageCourseEdit" class="form-control inputCourseEdit" required
                                      disabled>
                                  </div> -->
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" type="submit"
                                    id="submitButtonCoursesEdit">Submit</button>
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
                                    <label>Escolha uma Categoria</label>
                                    <select class="form-control" id="lessonFormSelectEdit" disabled>
                                      <option>Editar uma aula</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Nome da Aula</label>
                                    <input type="text" maxlength="35" class="form-control inputLessonsEdit"
                                      name="nameLessonsEdit" disabled required>
                                  </div>
                                  <div class="form-group">
                                    <label>Numero da Aula</label>
                                    <input type="number" class="form-control inputLessonsEdit"
                                      name="sequenceLessonsEdit" disabled required>
                                  </div>
                                  <div class="form-group">
                                    <label>Descrição da Aula</label>
                                    <textarea class="form-control inputLessonsEdit" id="lessonsInformationEdit"
                                      name="informationLessonsEdit" disabled required></textarea>
                                    <p class="char-count" id="charLessonsEdit">0/255</p>
                                  </div>
                                  <!-- <div class="form-group">
                                    <label>Video da Aula</label>
                                    <input type="file" class="form-control inputLessonsEdit" name="fileLessonsEdit" disabled
                                      required>
                                  </div> -->
                                </div>
                                <div class="card-footer text-right">
                                  <button class="btn btn-primary mr-1" id="submitButtonLessonsEdit" type="submit"
                                    disabled>Submit</button>
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
import Navbar from '@/components/Navbar.vue';
import AppTemplate from "./templates/AppTemplate.vue";

export default {
  name: "Home",
  props: [],
  components: {
    AppTemplate,
    Navbar,
    name: "MyComponent",
  },
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
</style>