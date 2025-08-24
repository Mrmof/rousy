@extends('layouts.userlayout')


@section('content')


    <div class="row mt-4">

        <!-- Categories List -->
        <div class="col-12 mt-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">Account Management</h6>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <!-- Category Card -->
                        <div class="col-md-4 offset-md-4">
                            <div class="card border border-1 shadow-sm h-100">
                                <div class="card-body text-center">
                                    <form action="" method="POST">
                                        @csrf
                                        <div class="mb-3 form-group">
                                            <label for="current_password" class="form-label">Current Password</label>
                                            <input type="password" class="form-control" id="current_password"
                                                name="current_password">
                                        </div>

                                        <div class="mb-3">
                                            <label for="new_password" class="form-label">New Password</label>
                                            <input type="password" class="form-control" id="new_password"
                                                name="new_password">
                                        </div>

                                        <div class="mb-3">
                                            <label for="new_password_confirmation" class="form-label">Confirm New
                                                Password</label>
                                            <input type="password" class="form-control" id="new_password_confirmation"
                                                name="new_password_confirmation">
                                        </div>

                                        <button type="submit" class="btn btn-warning">Change Password</button>
                                    </form>

                                </div>
                            </div>
                        </div>


                        <!-- End Category Card -->
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection