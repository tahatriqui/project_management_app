<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    public function project() {
        return $this->BelongsTo(Project::class);
    }

    public function assignedUser() {
        return $this->BelongsTo(User::class, 'assigned_user_id');
    }

    public function updatedBy() {
        return $this->BelongsTo(User::class, 'updated_by');
    }
}
