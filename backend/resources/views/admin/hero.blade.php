@extends('layouts.adminlayout')


@section('content')
    
    
    <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card ">
                <div class="card-header pb-0 p-3">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-2">Upload Hero Image</h6>
                    </div>
                </div>
                <div class="card-body">
                    <form action="">
                        <div class="form-group">
                            <label for="heroImage">Hero Image</label>
                            <div class="image-preview-container">
                                <img id="imagePreview" src="#" alt="Image Preview" style="display: none; max-width: 100%;">
                            </div>
                            <input type="file" class="form-control" id="heroImage" name="heroImage" accept="image/*" onchange="previewImage(event)">
                        </div>
                        <button type="submit" class="btn btn-primary">Upload</button>
                    </form>
                </div>
                
            </div>
        </div>
        <div class="col-lg-5">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">Latest Activities</h6>
                </div>
                <div class="card-body p-3">
                    <div class="table-responsive">
                    <table class="table align-items-center ">
                        <tbody>
                            <tr>
                                <td class="w-30">
                                    <div class="d-flex px-2 py-1 align-items-center">
                                        <div>
                                            <img src="../assets/img/icons/flags/US.png" alt="Country flag">
                                        </div>
                                        <div class="ms-4">
                                            <p class="text-xs font-weight-bold mb-0">Filename:</p>
                                            <h6 class="text-sm mb-0">Milk Photo</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Filesize:</p>
                                        <h6 class="text-sm mb-0">2500MB</h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Upload date:</p>
                                        <h6 class="text-sm mb-0">8/21/2025 10:00:00am</h6>
                                    </div>
                                </td>
                                <td class="align-middle text-sm">
                                    <div class="col text-center">
                                        <p class="text-xs font-weight-bold mb-0">Action:</p>
                                        <h6 class="text-sm text-danger mb-0">Delete</h6>
                                    </div>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        function previewImage(event) {
            const imagePreview = document.getElementById('imagePreview');
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            } else {
                imagePreview.style.display = 'none';
            }
        }
    </script>

@endsection